Calculate Total for Google Sheets
=================================

This script is designed to work with Google Sheets and allows you to quickly and easily calculate the total value of all rows where the value in column C begins with "Loading:". The script will remove the "EUR" portion of the value in column D and calculate the remaining numerical value, displaying the total in the first available empty field in column D. The script also adds a new menu item to the "Extensions" menu, allowing you to run the script with a single click. Additionally, it writes a bold text in column A in the same line as the total that says "Total upgraded in the last 365 days (EUR)" and also calculates the difference between 15000 and the total in the D column of the same line and displays the result with the bold text "Total to be upgraded (EUR)" in the A column in a line below the total.

Installation
------------

1.  Open the Google Sheet you want to use the script with.
2.  Click on "Tools" in the top menu, then select "Script editor".
3.  Copy and paste the code from the script file into the script editor.
4.  Save the script and give it an appropriate name.
5.  Refresh the sheet, and a new menu item "Calculate Total" should appear under the "Extensions" menu.

Usage
-----

1.  Select the range of cells you want to calculate the total for.
2.  Click on "Extensions" in the top menu, then select "Check IDV2 Limit".
3.  The script will calculate the total for the selected range and display it in the first available empty field in column D.
4.  The script will also write a bold text in column A in the same line as the total that says "Total upgraded in the last 365 days (EUR)" and also calculates the difference between 15000 and the total in the D column of the same line and displays the result with the bold text "Total to be upgraded (EUR)" in the A column in a line below the total.

Note
----

This script is designed to be simple and easy to use, but it is important to understand that it is a basic script and may not be suitable for more complex calculations or large amounts of data. It is always a good idea to double-check your calculations before making any important decisions.
