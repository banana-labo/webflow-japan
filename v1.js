$("body").on("click", function () {
    $(".w-editor-bem-Heading-h1").each(function () {
        $(this).is(':contains("Join as a content editor to start managing this website")') && $(this).text("管理者アカウント登録");
    }),
        $(".w-editor-bem-Field_Hint").text(""),
        $(".w-editor-bem-Field_Label_Text").each(function () {
            $(this).is(':contains("First Name")') && $(this).text("氏名"),
                $(this).is(':contains("Last Name")') && $(this).text("苗字"),
                $(this).is(':contains("Password")') && $(this).text("パスワード"),
                $(this).is(':contains("Email")') && $(this).text("メールアドレス");
        }),
        $(".w-editor-bem-Button-emphasis").each(function () {
            $(this).is(':contains("Join now")') && $(this).text("登録");
        }),
        $("div span").each(function () {
            $(this).is(':contains("Status:")') && $(this).text("ステータス：");
        }),
        $(".w-editor-bem-Text").each(function () {
            $(this).is(':contains("Pages")') && $(this).text("ページ"),
                $(this).is(':contains("Orders")') && $(this).closest(".w-editor-bem-EditorMainMenu_Tab").remove(),
                $(this).is(':contains("Ecommerce")') && $(this).closest(".w-editor-bem-EditorMainMenu_Tab").remove(),
                $(this).is(':contains("Collections")') && $(this).text("データベース"),
                $(this).is(':contains("Forms")') && $(this).closest(".w-editor-bem-EditorMainMenu_Tab").remove(),
                $(this).is(':contains("Status")') && $(this).text("ステータス"),
                $(this).is(':contains("Created")') && $(this).text("制作日"),
                $(this).is(':contains("Modified")') && $(this).text("最終更新日"),
                $(this).closest(".w-reset").hasClass("w-editor-bem-Table_Cell"),
                $(this).is(':contains("Staged Changes")') && $(this).text("公開準備完了"),
                $(this).is(':contains("Next")') && $(this).text("次へ"),
                $(this).is(':contains("Previous")') && $(this).text("前へ"),
                $(this).is(':contains("Replace")') && $(this).text("画像を変更"),
                $(this).is(':contains("Save as draft")') && $(this).text("下書きとして保存"),
                $(this).is(':contains("Unpublish")') && $(this).text("非公開状態に戻す"),
                $(this).is(':contains("Schedule")') && $(this).text("公開予約"),
                $(this).is(':contains("Stage for publish")') && $(this).text("公開準備状態に戻す"),
                $(this).is(':contains("View Site")') && $(this).text("管理画面を最小化");
        }),
        $(".w-editor-bem-EditorPagesPane_Table_Header").each(function () {
            $(this).is(':contains("Name")') && $(this).text("ページ名"), $(this).is(':contains("Created")') && $(this).text("制作日");
        }),
        $(".w-editor-bem-Table_Header").each(function () {
            $(this).is(':contains("Name")') && $(this).text("データベース名");
        }),
        $("button div").each(function () {
            $(this).is(':contains("Back to live site")') && $(this).text("編集画面を閉じる"),
                $(this).is(':contains("Select")') && $(this).text("選択"),
                $(this).is(':contains("Deselect All")') && $(this).text("選択解除"),
                $(this).is(':contains("Cancel")') && $(this).text("キャンセル"),
                $(this).is(':contains("Save")') && $(this).text("保存"),
                $(this).is(':contains("Create")') && $(this).text("作成"),
                $(this).is(':contains("Deselect all")') && $(this).text("選択解除");
        }),
        $("button").each(function () {
            $(this).is(':contains("Publish")') && $(this).text("公開");
        }),
        $(".w-editor-bem-Pane_Title").each(function () {
            $(this).is(':contains("Collections")') && $(this).text("データベース一覧");
        }),
        $(".w-editor-bem-Pane_Actions div input").each(function () {
            $(this).attr("placeholder", "ページを検索");
        }),
        $(".w-editor-bem-Pane_Actions div button div").each(function () {
            $(this).is(':contains("New")') && $(this).text("新規アイテム追加");
        }),
        $(".w-editor-bem-Modal_Title").each(function () {
            $(this).is(':contains("Confirm")') && $(this).text("ログアウト確認");
        }),
        $(".w-editor-bem-Modal_MessageText").each(function () {
            $(this).is(':contains("Are you sure you want to log out?")') && $(this).text("本当にログアウトしますか？");
        }),
        $("button div")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                (this.textContent = this.textContent.replace("Archive", "アーカイブ状態にする")),
                    (this.textContent = this.textContent.replace("Unarchive", "アーカイブ状態を解除")),
                    (this.textContent = this.textContent.replace("Delete", "削除")),
                    (this.textContent = this.textContent.replace("Duplicate", "複製する"));
            }),
        $(".w-editor-bem-Heading-h4").each(function () {
            $(this).is(':contains("Basic info")') && $(this).text("基本情報"), $(this).is(':contains("Custom fields")') &&
                $(this).text("関連情報");
        }),
        $(".w-editor-bem-EditSiteButton")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Edit site", "管理画面へ");
            }),
        $(".w-editor-expanding-label-inner")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Saved", "保存済み");
            }),
        $(".w-editor-bem-Table_Header")
            .find(".w-editor-bem-Text")
            .each(function () {
                $(this).is(':contains("Published")') && $(this).text("公開日");
            }),
        $(".w-editor-bem-Text")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Not Published", "未公開");
            }),
        $(".w-editor-bem-Text")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Published", "公開中");
            }),
        $(".w-editor-bem-Text")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Draft", "下書き");
            }),
        $(".w-editor-bem-Text")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Archived", "アーカイブ中");
            }),
        $(".w-editor-bem-Pane_Title")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Select", "");
            }),
        $("div")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Yes, log me out", "ログアウト");
            }),
        $("div")
            .contents()
            .filter(function () {
                return this.nodeType == Node.TEXT_NODE;
            })
            .each(function () {
                this.textContent = this.textContent.replace("Cancel", "キャンセル");
            }),
        $(".w-editor-bem-EditorMainMenu_Tab-account").remove(),
        $(".w-editor-bem-EditorMainMenu_Tab-help").remove(),
        $(".w-editor-change-count").text("公開準備完了"),
        $("#publish-option-text").text("公開"),
        $("#publish-draft-option-text").text("公開"),
        $(".w-editor-bem-Pane_Title h2").text("ページ一覧"),
        $(".w-editor-bem-TextInput-search").attr("placeholder", "ページ一覧を検索"),
        $(".w-editor-bem-EditorPagesPane_Heading").each(function () {
            let t = $(this).text();
            "Static Pages" != t ? ((t = t.replace("Pages", "")), $(this).text(t)) : $(this).text("固定ページ一覧");
        });
});
setTimeout(function () {
    $(".w-editor-bem-EditorMainMenu_Tab-logout").click(
        function () {
            console.log("clicked...waiting...");

            setTimeout(
                function () {
                    $('div').contents().filter(function () {
                        return this.nodeType == Node.TEXT_NODE;
                    }).each(function () {
                        this.textContent = this.textContent.replace('Yes, log me out', 'ログアウト');
                    });

                    $('div').contents().filter(function () {
                        return this.nodeType == Node.TEXT_NODE;
                    }).each(function () {
                        this.textContent = this.textContent.replace('Cancel', 'キャンセル');
                    });
                    $(".w-editor-bem-Modal_Title").each(function () {
                        if ($(this).is(':contains("Confirm")')) {
                            $(this).text("ログアウト確認");
                        }
                    });

                    $(".w-editor-bem-Modal_MessageText").each(function () {
                        if ($(this).is(':contains("Are you sure you want to log out?")')) {
                            $(this).text("本当にログアウトしますか？");
                        }
                    });
                },
                2000);
        });
}, 5000);