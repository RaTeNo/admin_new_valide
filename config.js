instance.UI.addEventListener(instance.UI.Events.VIEWER_LOADED, () => {
  const { documentViewer, annotationManager } = instance.Core;
  
  	instance.UI.disableElement('searchButton');
	instance.UI.disableElements(['toolbarGroup-Shapes']);
    instance.UI.disableElements(['toolbarGroup-Edit']);
    instance.UI.disableElements(['toolbarGroup-Insert']);  
    instance.UI.disableElements(['ribbons']);
    instance.UI.disableElements(['selectToolButton']);
    instance.UI.disableElements(['toolsHeader']);
    instance.UI.disableElements(['toggleNotesButton']);
  //instance.UI.setTheme('dark');
});