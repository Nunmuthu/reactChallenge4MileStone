module.exports = {
  "Initial Content": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.containsText("aside>h1", "TIME-TABLE")
      .verify.value("#classNameInput", "")
      .verify.containsText("#AddClass", "Add Class")
      .verify.containsText("#error", "")
      .click("#AddClass")
      .verify.containsText("span#error", "Please enter a class name")
      .setValue("#classNameInput", "cla")
      .click("#AddClass")
      .verify.containsText("span#error", "Minimum 5 character required")
      .setValue("#classNameInput", "ss 3")
      .click("#AddClass")
      .verify.value("#classNameInput", "")
      .verify.containsText("#error", "")
      .verify.containsText(
        "#selectStatement>h1",
        "Please Select A Class To View Their TimeTable"
      )
      .end();
  },
  "Checking Class List and added class time table": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .verify.elementPresent("aside>main>div:nth-of-type(3)")
      .verify.containsText("aside>main>div:nth-of-type(1)", "Class 1")
      .verify.containsText("aside>main>div:nth-of-type(2)", "Class 2")
      .verify.containsText("aside>main>div:nth-of-type(3)", "class 3")
      .click("aside>main>div:nth-of-type(2)")
      //tbody
      .verify.containsText("table>tbody>tr>td:nth-of-type(1)", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(2)>strong", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(2)>p", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>p", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>strong", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(9)>p", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(11)>strong", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(12)>p", "")

      //tbody
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(1)",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>strong",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)>strong",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(7)>p",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>p",
        ""
      )
      .verify.containsText("table>tbody>tr>td:nth-of-type(4)", "Break")
      .verify.containsText("table>tbody>tr>td:nth-of-type(7)", "Lunch")
      .verify.attributeContains(
        "table>tbody>tr>td:nth-of-type(7)",
        "rowSpan",
        "5"
      )
      .verify.attributeContains(
        "table>tbody>tr>td:nth-of-type(10)",
        "rowSpan",
        "5"
      )

      .end();
  },
  "Check Class 1": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(1)")
      .verify.not.elementPresent("#selectStatement>h1")
      .verify.containsText("#title>h1", "Class Name: Class 1")
      .verify.containsText("#title>button", "Delete Class")

      //tbody
      .verify.containsText("table>tbody>tr>td:nth-of-type(1)", "Monday")
      .verify.containsText("table>tbody>tr>td:nth-of-type(2)>strong", "English")
      .verify.containsText("table>tbody>tr>td:nth-of-type(2)>p", "Anu")

      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>strong", "Maths")
      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>p", "Venu")

      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>strong", "Social")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>p", "Thara")

      .verify.containsText("table>tbody>tr>td:nth-of-type(9)>strong", "History")
      .verify.containsText("table>tbody>tr>td:nth-of-type(9)>p", "Jack")

      .verify.containsText(
        "table>tbody>tr>td:nth-of-type(11)>strong",
        "Geography"
      )
      .verify.containsText("table>tbody>tr>td:nth-of-type(12)>p", "Monica")

      //tbody
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(1)",
        "Wednesday"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>strong",
        "English"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(2)>p",
        "Anu"
      )

      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(4)>strong",
        "Art"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(4)>p",
        "Monica"
      )

      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(8)>strong",
        "History"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(9)>p",
        "Ross"
      )

      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(1)",
        "Friday"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(8)>strong",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(9)>p",
        ""
      )

      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)>strong",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)>p",
        ""
      );
  },

  "Allot Class 1 friday 3period": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(1)")
      .click("table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)")
      .verify.elementPresent(".ModalBg")
      .verify.containsText(".Pop>span", "Add Details Here")
      .verify.attributeContains("#assign", "disabled", "true")
      .setValue("#subject", "English")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(4)")
      .verify.value("#teacherId", "202")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 1")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Friday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 4)
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>strong",
        "English"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>p",
        "Jack"
      );
  },
  "Error 1": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(3)")
      .click("table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)")
      .verify.elementPresent(".ModalBg")
      .verify.containsText(".Pop>span", "Add Details Here")
      .verify.attributeContains("#assign", "disabled", "true")
      .setValue("#subject", "English")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(4)")
      .verify.value("#teacherId", "202")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "class 3")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Friday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 4)
      .click("#assign")
      .verify.containsText(
        "#modalError",
        "Jack with emp id 202 has already been allocated for Class 1 on Friday, period 4"
      )
      .verify.not.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>strong",
        "English"
      )
      .verify.not.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>p",
        "Jack"
      )
      .verify.elementPresent(".ModalBg")
      .click("#cancel")
      .verify.not.elementPresent(".ModalBg")

      .click("table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)")
      .setValue("#subject", "Science")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(10)")
      .verify.value("#teacherId", "208")
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>strong",
        "Science"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(5)>td:nth-of-type(5)>p",
        "Yara"
      );
  },
  "Error 2": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(3)")
      .click("table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)")
      .verify.elementPresent(".ModalBg")
      .verify.containsText(".Pop>span", "Add Details Here")
      .verify.attributeContains("#assign", "disabled", "true")
      .setValue("#subject", "Biology")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(2)")
      .verify.value("#teacherId", "200")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "class 3")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Monday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 1)
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>strong",
        "Biology"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>p",
        "Zara"
      )
      .verify.not.elementPresent(".ModalBg")

      .click("aside>main>div:nth-of-type(1)")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>strong", "Social")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>p", "Thara")
      .click("table>tbody>tr>td:nth-of-type(6)>button")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>strong", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(6)>p", "")
      .pause(1000)
      .click("table>tbody>tr:nth-of-type(1)>td:nth-of-type(6)")
      .verify.elementPresent(".ModalBg")
      .verify.attributeContains("#assign", "disabled", "true")
      .setValue("#subject", "Biology")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(2)")
      .verify.value("#teacherId", "200")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 1")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Monday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 4)
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(6)>strong",
        "Biology"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(6)>p",
        "Zara"
      )

      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>strong", "Maths")
      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>p", "Venu")
      .click("table>tbody>tr>td:nth-of-type(5)>button")
      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>strong", "")
      .verify.containsText("table>tbody>tr>td:nth-of-type(5)>p", "")
      .pause(1000)
      .click("table>tbody>tr:nth-of-type(1)>td:nth-of-type(5)")
      .verify.elementPresent(".ModalBg")
      .setValue("#subject", "English")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(2)")
      .verify.value("#teacherName", "Zara")
      .verify.value("#teacherId", "200")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 1")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Monday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 3)
      .click("#assign")
      .verify.containsText(
        "#modalError",
        `No more hours can be allocated for Zara in morning`
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(5)>strong",
        ""
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(1)>td:nth-of-type(5)>p",
        ""
      )
      .click("#cancel");
  },
  "Error 3": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(3)")
      .click("table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)")
      .verify.elementPresent(".ModalBg")
      .setValue("#subject", "Maths")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(9)")
      .verify.value("#teacherId", "207")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "class 3")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Tuesday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 7)
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>strong",
        "Maths"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(8)>p",
        "Venu"
      )
      .verify.not.elementPresent(".ModalBg")

      .click("aside>main>div:nth-of-type(2)")
      .verify.containsText("#title>h1", "Class Name: Class 2")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>strong",
        ""
      )
      .click("table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)")
      .setValue("#subject", "Maths")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(9)")
      .verify.value("#teacherId", "207")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 2")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Tuesday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 8)
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>strong",
        "Maths"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(9)>p",
        "Venu"
      )
      .verify.not.elementPresent(".ModalBg")

      .click("aside>main>div:nth-of-type(1)")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>strong",
        "Social"
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>p",
        "Thara"
      )
      .click("table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>button")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>strong",
        ""
      )
      .pause(1000)
      .click("table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)")
      .setValue("#subject", "Maths")
      .verify.value("#teacherId", "")
      .click("#teacherName option:nth-child(9)")
      .verify.value("#teacherId", "207")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 1")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Tuesday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 6)
      .verify.containsText("#modalError", "")
      .click("#assign")
      .verify.containsText(
        "#modalError",
        `No more hours can be allocated for Venu in evening`
      )
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>strong",
        ""
      )
      .click("#cancel")

      .click("table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)")
      .setValue("#subject", "Geography")
      .click("#teacherName option:nth-child(6)")
      .verify.value("#teacherId", "204")
      .verify.containsText(".cellDetails>p:nth-of-type(1)", "Class 1")
      .verify.containsText(".cellDetails>p:nth-of-type(2)", "Tuesday")
      .verify.containsText(".cellDetails>p:nth-of-type(3)", 6)
      .verify.containsText("#modalError", "")
      .click("#assign")
      .verify.containsText(
        "table>tbody>tr:nth-of-type(2)>td:nth-of-type(7)>p",
        "Roger"
      );
  },

  "Delete class": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("body")
      .click("aside>main>div:nth-of-type(1)")
      .click("#title>button")
      .verify.not.elementPresent("aside>main>div:nth-of-type(3)")
      .verify.containsText("aside>main>div:nth-of-type(1)", "Class 2")
      .verify.containsText("aside>main>div:nth-of-type(2)", "class 3")

      .click("aside>main>div:nth-of-type(2)")
      .click("#title>button")
      .verify.not.elementPresent("aside>main>div:nth-of-type(2)")
      .verify.containsText("aside>main>div:nth-of-type(1)", "Class 2");
  },
};
