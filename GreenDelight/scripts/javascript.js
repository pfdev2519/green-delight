var subjectObject = {
    "Breakfast": {
      "Avocado Toast": [],
      "Mushroom Toast": [],
      "Tomato Toast": []    
    },
    
    "Lunch": {
      "Avocado Salad": [],
      "Mushroom Salad": [],
      "Tomato Salad": []
    },
    
    "Dinner": {
      "Avocado Burger": [],
      "Mushroom Burger": [],
      "Tomato Burger": []
    }
  }
  
  window.onload = function() {
    var subjectSel = document.getElementById("dropdown");
    var topicSel = document.getElementById("topic");
    
    
    
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
     
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }