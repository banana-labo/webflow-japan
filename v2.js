function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function applyTranslations() {
    const headingMap = {
        "Join as a content editor to start managing this website": "管理者アカウント登録"
    };
    const labelMap = {
        "First Name": "氏名",
        "Last Name": "苗字",
        "Password": "パスワード",
        "Email": "メールアドレス"
    };
    const buttonDivMap = {
        "Back to live site": "編集画面を閉じる",
        "Select": "選択",
        "Deselect All": "選択解除",
        "Deselect all": "選択解除",
        "Cancel": "キャンセル",
        "Save": "保存",
        "Create": "作成"
    };
    const textNodeMap = {
        "Not Published": "未公開",
        "Mon": "月曜日", "Tue": "火曜日", "Wed": "水曜日", "Thu": "木曜日", "Fri": "金曜日", "Sat": "土曜日", "Sun": "日曜日",
        "Jan": "1月", "Feb": "2月", "Mar": "3月", "Apr": "4月", "May": "5月", "Jun": "6月", "Jul": "7月", "Aug": "8月",
        "Sep": "9月", "Oct": "10月", "Nov": "11月", "Dec": "12月",
        "Archive": "アーカイブ状態にする", "Unarchive": "アーカイブ状態を解除", "Delete": "削除", "Duplicate": "複製する",
        "New ": "【新規作成】", "Published": "公開中", "Draft": "下書き", "Archived": "アーカイブ中",
        "Yes, log me out": "ログアウト", "Cancel": "キャンセル"
    };

    $(".w-editor-bem-Heading-h1").each(function () {
        const text = $(this).text();
        if (headingMap[text]) $(this).text(headingMap[text]);
    });

    $(".w-editor-bem-Field_Label_Text").each(function () {
        const text = $(this).text();
        if (labelMap[text]) $(this).text(labelMap[text]);
    });

    $("button div").each(function () {
        const text = $(this).text();
        if (buttonDivMap[text]) $(this).text(buttonDivMap[text]);
    });

    $("div, button div, .w-editor-bem-Text, .w-editor-bem-EditSiteButton, .w-editor-expanding-label-inner, .w-editor-bem-Pane_Title, .w-editor-bem-Modal_Title, .w-editor-bem-Modal_MessageText")
        .contents()
        .filter(function () { return this.nodeType === Node.TEXT_NODE; })
        .each(function () {
            let text = this.textContent;
            Object.keys(textNodeMap).forEach(key => {
                if (text.includes(key)) text = text.replace(key, textNodeMap[key]);
            });
            this.textContent = text;
        });

    $(".w-editor-bem-EditorMainMenu_Tab-account, .w-editor-bem-EditorMainMenu_Tab-help").remove();
    $(".w-editor-change-count").text("公開準備完了");
    $("#publish-option-text, #publish-draft-option-text").text("公開");
    $(".w-editor-bem-Pane_Title h2").text("ページ一覧");
    $(".w-editor-bem-TextInput-search").attr("placeholder", "ページ一覧を検索");
    $(".w-editor-bem-Field_Hint").text("");

    $(".w-editor-bem-Text").each(function () {
        if ($(this).is(':contains("Orders")') || $(this).is(':contains("Ecommerce")') || $(this).is(':contains("Forms")')) {
            $(this).closest(".w-editor-bem-EditorMainMenu_Tab").remove();
        }
    });

    $(".w-editor-bem-EditorPagesPane_Heading").each(function () {
        let t = $(this).text();
        t = (t !== "Static Pages") ? t.replace("Pages", "") : "固定ページ一覧";
        $(this).text(t);
    });

    $(".w-editor-bem-Pane_Actions div input").attr("placeholder", "ページを検索");
    $(".w-editor-bem-Pane_Actions div button div:contains('New')").text("新規アイテム追加");
    $(".w-editor-bem-Modal_Title:contains('Confirm')").text("ログアウト確認");
    $(".w-editor-bem-Modal_MessageText:contains('Are you sure you want to log out?')").text("本当にログアウトしますか？");

    console.log("Translations applied.");
}

function waitForEditorAndStart() {
    const checkInterval = setInterval(() => {
        if (document.querySelector(".w-editor-bem-EditorMainMenu_Tabs")) {
            clearInterval(checkInterval);

            console.log("Editor loaded, starting observer...");

            const targetNode = document.body;
            const config = {
                childList: true,
                subtree: true,
                characterData: true
            };

            const debouncedApplyTranslations = debounce(applyTranslations, 300);

            const observer = new MutationObserver((mutationsList) => {
                let shouldRun = false;
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        shouldRun = true;
                        break;
                    }
                }
                if (shouldRun) {
                    debouncedApplyTranslations();
                }
            });

            observer.observe(targetNode, config);

            // Run once immediately
            applyTranslations();
        }
    }, 500);
}

// Start waiting
waitForEditorAndStart();
