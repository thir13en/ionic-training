# Forms

* Sorround all your form fields in `ion-item` elements.

### How to gain access to a form control programmatically?
Assigning the ngModel to a local template reference like this:
```angular2html
<ion-input
    #emailCtrl="ngModel"
    type="email"
    ngModel
    name="email"
    email
    required
></ion-input>
```
