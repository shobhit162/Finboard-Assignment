export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('FinBoard AI') // edit me!
    .addItem('Report Generator', 'openDialogMUI')
    .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
};

export const openDialogMUI = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-mui')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Report Generator');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
