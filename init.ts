import * as vscode from "vscode";
import { initUsePackage, usePackage } from "vscode-use-package";

export async function init(context: vscode.ExtensionContext) {
    initUsePackage(context);
    usePackage("asvetliakov.vscode-neovim", {
        globalConfig: {
            "extensions.experimental.affinity": {
                "asvetliakov.vscode-neovim": 1
            }
        }
    });
    usePackage("xadillax.viml");
};