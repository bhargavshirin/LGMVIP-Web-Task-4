function calculate() {
      var answerField = document.form1.answer;
      answerField.value = eval(answerField.value);
    }

    function clearInput() {
      document.form1.answer.value = '';
    }

    function deleteLastCharacter() {
      var answerField = document.form1.answer;
      answerField.value = answerField.value.slice(0, -1);
    }

    function appendNumber(number) {
      document.form1.answer.value += number;
    }

    function appendOperator(operator) {
      document.form1.answer.value += operator;
    }
