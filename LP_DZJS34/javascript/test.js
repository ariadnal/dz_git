var test = {

  testParent: document.body,
  test: document.createElement('form'),
  testHeader: document.createElement('header'),
  testTitle: document.createElement('h4'),
  submitButton:  document.createElement('button'),

  createTest: function(name, button) {

    this.test.classList.add('test');
    this.testTitle.classList.add('test__title');
    this.testTitle.innerHTML = name;
    this.submitButton.classList.add('test__submitButton');
    this.submitButton.classList.add('btn');
      this.submitButton.classList.add('btn-primary');
    this.submitButton.setAttribute('type', 'submit');
    this.submitButton.innerHTML = button;

    this.testParent.appendChild(this.test);
    this.test.appendChild(this.testHeader);
    this.testHeader.appendChild(this.testTitle);
    this.test.appendChild(this.submitButton);

  },

  createQuestion: function(title, answersArray) {

    var questionWrapper = document.createElement('div');
    var questionHeader = document.createElement('header');
    var questionTitle = document.createElement('h4');
    var answersList = document.createElement('ul');
    var listItem;
    var answerCheckbox;
    var answerLabel;
    questionWrapper.classList.add('questionWrapper')
    questionTitle.classList.add('questionWrapper__title')
    questionTitle.innerHTML = title;
    questionWrapper.appendChild(questionHeader);
    questionHeader.appendChild(questionTitle);
    questionWrapper.appendChild(answersList);


    for (var i = 0; i < answersArray.length; i++) {
      var labelText = document.createTextNode(answersArray[i]);
      answerLabel =  document.createElement('label');
      answerCheckbox =  document.createElement('input');
      listItem = document.createElement('li');
      answerCheckbox.classList.add('answer__checkbox');
      answerLabel.classList.add('checkbox-inline');
      answerLabel.classList.add('answer__title');
      answerCheckbox.setAttribute('type', 'checkbox');
      answersList.appendChild(listItem);
      listItem.appendChild(answerLabel);
      answerLabel.appendChild(answerCheckbox);
      answerLabel.appendChild(labelText);
    }
    this.test.insertBefore(questionWrapper, this.submitButton);
  }
}

test.createTest('Тест по программированию', 'Проверить мои результаты');
test.createQuestion('1. Вопрос №1',  ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'] );
test.createQuestion('2. Вопрос №2',  ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'] );
test.createQuestion('3. Вопрос №3',  ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'] );
