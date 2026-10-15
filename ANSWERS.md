## Step 2
1. name, faculty, classYear, quote, photo
2. id
3. featured

## Question 1
The Angular CLI adds it automatically because it's set in angular.json, which is why all
our components start with it, like app-header and app-top-strip. It stops our components
from clashing with normal HTML tags like <header>, and it makes it easy to tell which tags
are ours.

## Question 2
Yes, it updates by itself. input() is a signal, so when the parent sends a different
student, the card gets the new value and shows it right away.

## Question 3
Because the SVG uses stroke="currentColor", so it takes its color from the CSS color
property. In .card__arrow I set color to red, so the arrow becomes red.

## Question 4
The constructor only runs once, so the value would never change. But the image can fail
later, and the student can change too. computed updates by itself whenever one of them
changes, so the right picture always shows.

## Reflection

1. The page already loads all the students once, so it just passes one to each card.
If every card loaded its own data, we'd have 8 requests instead of 1. This way the card
just shows what it gets, so it's simpler and easy to reuse.

2. The card's code stays in one place, so the page is shorter and cleaner. I can reuse
the same card anywhere without copying it, and if I change the design I only change it once.

3. I'd add graduationDate to the Student interface in student.model.ts and to
students.json for testing. Then I'd show it in student-card.html, and style it in
student-card.css if needed. The page and the service stay the same.

4. Step 4 was the hardest because the PDF said student-directory.ts but my project had
students-page.ts, so I had to figure out the right file. I also got stuck when ng build
failed and when git push didn't accept my login. I read the errors carefully, fixed the
route in app.routes.server.ts, and pushed from VS Code instead.
