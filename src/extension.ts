import * as vscode from 'vscode';

export function activate({ subscriptions }: vscode.ExtensionContext) {
	const terminal = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
	terminal.text = '$(console)';
	terminal.tooltip = 'Open Terminal';
	terminal.command = 'workbench.action.terminal.toggleTerminal';

	const debugConsole = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
	debugConsole.text = '$(debug-console)';
	debugConsole.tooltip = 'Open Debug Console';
	debugConsole.command = 'workbench.debug.action.toggleRepl';

	subscriptions.push(terminal);
	subscriptions.push(debugConsole);
	terminal.show();
	debugConsole.show();
}

