//Person Constructor
{
    function Person (name, surname) {
        this.name = name;
        this.surname = surname;
    
        this.getFullName = function() {
        let str = `${this.name} ${this.surname}`;
        if (this.fatherName) {
            str = `${this.name} ${this.fatherName} ${this.surname}`;
        }
        return str;
        };
    }
    
    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");

    console.log(a.getFullName());
    a.fatherName = "Іванович";
    console.log(a.getFullName()); 
    console.log(b.getFullName());
}

//Person Prototype
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  Person.prototype.getFullName = function() {
    let str = `${this.name} ${this.surname}`;
    if (this.fatherName) {
      str = `${this.name} ${this.fatherName} ${this.surname}`;
    }
    return str;
  };
  
  const a = new Person("Вася", "Пупкін");
  const b = new Person("Ганна", "Іванова");
  const c = new Person("Єлизавета", "Петрова");
  
  console.log(a.getFullName()); // Вася Пупкін
  a.fatherName = "Іванович";
  console.log(a.getFullName()); // Вася Іванович Пупкін
  
  console.log(b.getFullName()); // Ганна Іванова
  
// Password
{
    function Password(parent, open) {
        const input = document.createElement('input');
        input.type = 'password';
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Show'; 
        toggleButton.onclick = () => {
            input.type = input.type === 'password' ? 'text' : 'password'; 
            toggleButton.innerText = input.type === 'password' ? 'Show' : 'Hide'; 
        };

        parent.append(input);
        parent.append(toggleButton);

        this.setValue = function(value) {
            input.value = value;
        };

        this.getValue = function() {
            return input.value;
        };

        this.setOpen = function(isOpen) {
            input.type = isOpen ? 'text' : 'password';
            toggleButton.innerText = isOpen ? 'Hide' : 'Show';
        };

        this.getOpen = function() {
            return input.type === 'text';
        };

        this.onOpenChange = null;
        this.setOnOpenChange = function(callback) {
            this.onOpenChange = callback;
        };

        input.oninput = () => {
            if (typeof this.onChange === 'function') {
                this.onChange(input.value);
            }
        };

        toggleButton.onclick = () => {
            this.setOpen(!this.getOpen());
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(this.getOpen());
            }
        };

        this.setOpen(open);
    }

    const parentElement = document.body;
    const p = new Password(parentElement, true);

    p.onChange = data => console.log(data);  
    p.setOnOpenChange = open => console.log(open);

    p.setValue('qwerty');
    console.log(p.getValue());

    p.setOpen(false);
    console.log(p.getOpen());
}

//LoginForm
{
    function Password(parent, open) {
        const login = document.createElement('input');
        login.type = 'text';
        login.placeholder = "Login";
        const input = document.createElement('input');
        input.type = 'password';
        input.placeholder = "Password";
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Show'; 
        const button = document.createElement('button');
        button.innerText = 'Send'; 
        button.disabled = true;

        function isNotEmpty() {
            return input.value.trim() !== '' &&  login.value.trim() !== '';
        }

        function updateButtonActivity() {
            button.disabled = !isNotEmpty();
        }

        toggleButton.onclick = () => {
            this.setOpen(!this.getOpen());
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(this.getOpen());
            }
            toggleButton.innerText = this.getOpen() ? 'Hide' : 'Show';
        };

        parent.append(login);
        parent.append(input);
        parent.append(toggleButton);
        parent.append(button);


        this.setValue = function(value) {
            input.value = value;
            updateButtonActivity(); 
        };

        this.getValue = function() {
            return input.value;
        };

        this.setOpen = function(isOpen) {
            input.type = isOpen ? 'text' : 'password';
            toggleButton.innerText = isOpen ? 'Hide' : 'Show';
        };

        this.getOpen = function() {
            return input.type === 'text';
        };

        this.onOpenChange = null;
        this.setOnOpenChange = function(callback) {
            this.onOpenChange = callback;
        };

        input.oninput = () => {
            if (typeof this.onChange === 'function') {
                this.onChange(input.value);
            }
            updateButtonActivity(); 
        };
        login.oninput = () => {
            updateButtonActivity(); 
        };
        
        toggleButton.onclick = () => {
            this.setOpen(!this.getOpen());
            if (typeof this.onOpenChange === 'function') {
                this.onOpenChange(this.getOpen());
            }
        };

        this.setOpen(open);
        updateButtonActivity();
    }

    const parentElement = document.body;
    const p = new Password(parentElement, true);
}

//Password Verify
function Password(parent, open) {
    const login = document.createElement('input');
    login.type = 'text';
    login.placeholder = "Login";
    const input1 = document.createElement('input');
    input1.type = 'password';
    input1.placeholder = "Password";
    const input2 = document.createElement('input');
    input2.type = 'password';
    input2.placeholder = "Confirm Password";
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Show'; 
    const button = document.createElement('button');
    button.innerText = 'Send'; 
    button.disabled = true;

    function isNotEmpty() {
        return input1.value.trim() !== '' && input2.value.trim() !== '' &&  login.value.trim() !== '';
    }

    function updateButtonActivity() {
        button.disabled = !isNotEmpty();
    }

    toggleButton.onclick = () => {
        this.setOpen(!this.getOpen());
        if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(this.getOpen());
        }
        toggleButton.innerText = this.getOpen() ? 'Hide' : 'Show';
        if (!this.getOpen()) {
            input2.style.display = 'block';
        } else {
            input2.style.display = 'none';
        }
    };

    parent.append(login);
    parent.append(input1);
    parent.append(input2);
    parent.append(toggleButton);
    parent.append(button);


    this.setValue = function(value) {
        input1.value = value;
        updateButtonActivity(); 
    };

    this.getValue = function() {
        return input1.value;
    };

    this.setOpen = function(isOpen) {
        input1.type = isOpen ? 'text' : 'password';
        toggleButton.innerText = isOpen ? 'Hide' : 'Show';
    };

    this.getOpen = function() {
        return input1.type === 'text';
    };

    this.onOpenChange = null;
    this.setOnOpenChange = function(callback) {
        this.onOpenChange = callback;
    };

    input1.oninput = () => {
        if (typeof this.onChange === 'function') {
            this.onChange(input1.value);
        }
        updateButtonActivity(); 
    };
    input2.oninput = () => {
        updateButtonActivity(); 
        if (input1.value !== input2.value) {
            input2.style.borderColor = 'red';
        } else {
            input2.style.borderColor = '';
        }
    };
    login.oninput = () => {
        updateButtonActivity(); 
    };
    
    toggleButton.onclick = () => {
        this.setOpen(!this.getOpen());
        if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(this.getOpen());
        }
        if (!this.getOpen()) {
            input2.style.display = 'block';
        } else {
            input2.style.display = 'none';
        }
    };

    this.setOpen(open);
    updateButtonActivity();
}

const parentElement = document.body;
const p = new Password(parentElement, true);

