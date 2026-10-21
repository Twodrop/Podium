# Test Report

<!--
    Commit this file to the root of your application's GitHub repository, alongside its code.
    Every requirement listed in your README.md needs at least one test case below. Giving each
    requirement a short ID in the README (e.g. R1, R2) makes the "Requirement" column easy to fill
    in and to check.
-->

## Summary

_Briefly describe how you tested your application – manually through its interface, automatically,
or both – clearly enough that someone else could carry out the same tests. What was hardest to
test, and why?_

Answer:

## Test Results

**Example** (shows what filled-in rows can look like – remove this example table before
submitting):

| Test case                         | Requirement | Input                                                   | Expected outcome                                               | Actual outcome                                                         |
| --------------------------------- | ----------- | ------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Show temperature chart for a city | R1          | Selected "Växjö" in the city list and clicked "Show".   | A bar chart of the last seven days' temperatures for Växjö.    | ✅ As expected.                                                        |
| Unknown city name                 | R3          | Typed "Atlantis" in the search field and pressed Enter. | A clear message that the city wasn't found; no chart is drawn. | ❌ An empty chart was drawn – fixed, the message is now shown instead. |

**Your test results:**

Test texts used below:

- **Short text (13 words):** `One two three four five six seven eight nine ten eleven twelve thirteen.`
- **Long sentence (28 words):** `When you stand in front of a room full of people it helps to slow down and breathe and look at a few friendly faces before you begin.`

Unless a test says otherwise, each test starts from a fresh page with the default pace (Normal, 130 words/min).

| Test case                        | Requirement | Input                                                                                                    | Expected outcome                                                                                                | Actual outcome                                     |
| -------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| TC1: Paste a speech              | FR1         | Pasted the short text into the editor.                                                                   | The text appears in the editor.                                                                                 | ✅ As expected.                                    |
| TC2: Invalid custom pace         | FR2         | Entered `0` as custom pace.                                                                              | An error message is shown, and the pace stays at 130 words/min.                                                 |                                                    |
| TC3: Total speaking time         | FR3         | Pasted the short text.                                                                                   | Total speaking time shows 0:06.                                                                                 | ✅ As expected.                                    |
| TC4: Sections from headings      | FR4         | Typed `# Intro`, new line, `Hello there.`, new line, `# Main`, new line, `Thank you all for coming.`     | Two sections: Intro with 2 words and Main with 5 words. The total is 7 words; the headings are not counted.     | ❌ Not implemented                                 |
| TC5: Long sentence               | FR5         | Pasted the long sentence.                                                                                | The sentence is listed as too long, with 28 words.                                                              | ❌ Not implemented                                 |
| TC6: Over target time            | FR6         | Pasted the short text and set the target to 0:05.                                                        | The app shows 1 second over the target.                                                                         | ❌ Not implemented                                 |
| TC7: Statistics panel            | FR7         | Pasted `This is a very basic package. The following shows off its features.`                             | 67 characters, 12 words, 2 sentences, average word length 4.5, average sentence length 6.                       | ✅ As expected.                                    |
| TC8: Most repeated words         | FR8         | Pasted `The pace and the pace and the timer pace`.                                                       | "pace" is listed first with 3. "the" and "and" are not listed.                                                  | ✅ As expected.                                    |
| TC9: Teleprompter scrolls        | FR9         | Pasted the short text, clicked "Practie with teleprompter", then clicked Start.                          | After "Get ready…", the text scrolls up and reaches the end after about 6 seconds.                              | ✅ As expected.                                    |
| TC10: Pause and resume           | FR10        | Pasted the short text, opened the teleprompter, clicked Start, waited for scrolling, then clicked Pause. | While scrolling, Pause is enabled and Resume is disabled. After Pause, Resume is enabled and Pause is disabled. | ✅ As expected.                                    |
| TC11: Start with empty speech    | FR11        | Opened the teleprompter with the editor empty.                                                           | Start is disabled.                                                                                              | ✅ As expected.                                    |
| TC12: Elapsed and remaining time | FR12        | Pasted the short text, set the pace to 50, opened the teleprompter and clicked Start.                    | Elapsed time counts up and remaining time counts down.                                                          | ❌ Not implemented                                 |
| TC13: Kept between visits        | FR13        | Pasted the short text, then reloaded the page.                                                           | The text is still in the editor .                                                                               | ✅ As expected.                                    |
| TC14: Public URL                 | NFR1        | Opened the live URL in a private window and pasted the short text.                                       | The app loads and shows 0:06.                                                                                   | ✅ As expected.                                    |
| TC15: Phone-width screen         | NFR2        | Opened the live URL on a phone, or in the browser's device mode at 375 px wide.                          | Everything fits on the screen with no sideways scrolling.                                                       | ❌ Sideway scrolling appears with a width of 375px |
| TC16: 5,000-word speech          | NFR3        | Pasted the contents of `sample-speeches/5000-words.txt`, then typed a word at the end.                   | The report updates with no noticeable delay.                                                                    | ✅ As expected.                                    |
| TC17: No network requests        | NFR4        | Opened the browser's Network tab, then typed in the editor.                                              | No new network requests appear.                                                                                 | ✅ As expected.                                    |
| TC18: No static methods          | NFR5        | Searched all files in `src/` for the word `static`.                                                      | No matches.                                                                                                     | ✅ As expected.                                    |

## Known Issues in Third-Party Modules

_List any flaws you found in the other student's module that affected your application, how they
show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the
module's repository). Write "None found" if there weren't any._

Answer:
