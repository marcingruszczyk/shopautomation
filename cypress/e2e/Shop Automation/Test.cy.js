import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import DropdownListPage from "../../page-objects/dropdownListPage";
import BasicauthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import KeyPressPage from "../../page-objects/keyPressPage";
import AddRemoveElementPage from "../../page-objects/addRemoveElementPage";
import StatusCodePage from "../../page-objects/statusCodesPage";
import iframePage from "../../page-objects/iframePage";
import DataPickerPage from "../../page-objects/dataPickerPage";
import DragAndDropPage from "../../page-objects/dragadndropPage";
describe("Test of simple website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test inputs", () => {
    const homePage = new HomePage();
    homePage.clickInputsTab();

    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
    inputPage.typeLettersIntoField();
  });

  it("Test checkbox", () => {
    const homePage = new HomePage();
    homePage.clickCheckboxTab();

    const checkbox = new CheckboxPage();
    checkbox.checkFirstCheckbox();
    checkbox.uncheckLastCheckbox();
  });
  it("test dropdown list", function () {
    const homePage = new HomePage();
    homePage.clickDropdownListTab();

    const dropdownPage = new DropdownListPage();
    dropdownPage.chooseFirstOptionFromDropdownList();
  });
  it("test hover", function () {
    const homePage = new HomePage();
    homePage.clickHoversTab();

    const hoversPage = new HoversPage();
    hoversPage.hoverOverElement();
  });
  it("test basic auth", function () {
    const homePage = new HomePage();
    homePage.clickBasicAuthTab();

    const basicAuthPage = new BasicauthPage();
    basicAuthPage.emptyLoginAuth();
    basicAuthPage.negativeLoginAuth();
    basicAuthPage.positiveLoginAuth();
  });
  it("test form", function () {
    const homePage = new HomePage();
    homePage.clickFormTab();

    const formPage = new FormPage();
    formPage.positiveFormSubmit();
  });
  it("test key press", function () {
    const homePage = new HomePage();
    homePage.clickKeyPressTab();

    const keyPressPage = new KeyPressPage();
    keyPressPage.checkTypeKey();
  });
  it("test add/remove element", function () {
    const homePage = new HomePage();
    homePage.clickAddRemoveElementPageTab();

    const addRemoveElementPage = new AddRemoveElementPage();
    addRemoveElementPage.addNewElement();
    addRemoveElementPage.deleteElement();
  });
  it("test satus codes", function () {
    const homePage = new HomePage();
    homePage.clickStatusCodesPageTab();

    const statusCodesPage = new StatusCodePage();
    statusCodesPage.test200();
    statusCodesPage.test305();
    statusCodesPage.test404();
    statusCodesPage.test500();
  });
  it("test iFrame", function () {
    const homePage = new HomePage();
    homePage.clickIframePageTab();

    const iFramePage = new iframePage();
    iFramePage.button1();
    iFramePage.button2();
  });
  it("test date picker", function () {
    const homePage = new HomePage();
    homePage.clickDataPicker();

    const datePicker = new DataPickerPage();
    datePicker.typeCorrectData();
  });
  it.only("test drag and drop", function () {
    const homePage = new HomePage();
    homePage.clickDragAndDrop();

    const draganddropPage = new DragAndDropPage();
    draganddropPage.dragAndDropElement();
  });
});
