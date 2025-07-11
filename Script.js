function Furniture_to_mobile()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://smartbearstore.smartbear.com/samples/TestComplete15/smartstore/");
  //Clicks the 'Chrome_RenderWidgetHostHWND' object.
  Aliases.browser.BrowserWindow.Chrome_RenderWidgetHostHWND.Click(464, 354);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageShop.sectionContent.articleFurniture.textnodeFurniture.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  
 Aliases.browser.pageShopFurniture.header.navBooks.textnodeMobilePhone.WaitAliasChild("linkMobilePhone", 20000);
  Aliases.browser.pageShopFurniture.header.navBooks.textnodeMobilePhone.linkMobilePhone.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).

  Aliases.browser.pageShopApple2.sectionContent.article9.WaitAliasChild("linkShowDetailsForTheTablet", 20000);
  Aliases.browser.pageShopApple2.sectionContent.article9.linkShowDetailsForTheTablet.imageShowDetailsForTheTablet.Click();
  //Closes the specified Window object.
  Aliases.browser.BrowserWindow.Close();
}