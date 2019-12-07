var story = {
  // nessesary for the initialisation
  "Start" : [
    {
      "type" : "description",
      "text" : "Alles ist dunkel. Was ist passiert? Wo bist du?",
      "next" : "Start|1"
    },
    {
      "type" : "question",
      "text" : "Was machst du nun?",
      "question": [
        {
          "text" : "Versuche dich zu erinnern...",
          "next" : "Schlafzimmer|0"
        },
        {
          "text" : "Augen oeffnen",
          "next" : "Schlafzimmer|1"
        }
      ]
    }
  ],
  // rooms
  "Schlafzimmer" : [
    {
      "type" : "description",
      "text" : "Um dich fuehlt sich alles sehr weich und warm an. Etwas weiches und schweres leigt auf dir. Du streckst dich. Du liegst in einem Bett. Und du oeffnest die Augen, es ist dein Bett.",
      "next" : "Schlafzimmer|2"
    },
    {
      "type" : "description",
      "text" : "Du erwachst deine Augen sind noch sehr schwer. Du schaust dich um und erkennst dein Schlafzimmer.",
      "next" : "Schlafzimmer|2"
    },
    {
      "type" : "description",
      "text" : "Nach dem du an die Decke blickst erkennst schaust du auf die Uhr. Schon 17:00 Uhr am 08.12.2019. Huch ist das nicht dein Geburtstag?",
      "next" : "Schlafzimmer|3"
    },
    {
      "type" : "description",
      "text" : "Was ist nur passiert?",
      "next" : "Schlafzimmer|4"
    },
    {
      "type" : "description",
      "text" : "[LOGIK] Du hast wohl wieder einen Mittagsschlaf gemacht, der Geschmack nach Alkohol in deinem Mund deutet auf eine Feier hin. Der Uhrzeit nach zuschliessen war es wohl ein Brunch und kein Party am abend.",
      "next" : "Schlafzimmer|5"
    },
    {
      "type" : "question",
      "text" : "Was machst du nun?",
      "question": [
        {
          "text" : "Du versuchst dich an deine Geschenke zu erinnern! [ERINNERN]",
          "next" : "Schlafzimmer|6"
        },
        {
          "text" : "Augen oeffnen",
          "next" : "Schlafzimmer|8"
        }
      ]
    },
    {
      "type" : "description",
      "text" : "...",
      "next" : "Schlafzimmer|5"
    },
    {
      "type" : "description",
      "text" : "...",
      "next" : "Schlafzimmer|5"
    },
    {
      "type" : "description",
      "text" : "...",
      "next" : "Schlafzimmer|5"
    },
  ],
  "Badezimmer" : [

  ],
  "Flur" : [

  ],
  "Kueche" : [

  ],
  "Arbeitszimmer" : [

  ],
  "Wohnzimmer" : [

  ]
};

function tellStory(story, next){
  let args = next.split('|');
  let obj = story[args[0]][args[1]];
  if(obj.type === "description"){
    description(obj)
    return tellStory(story, obj.next)
  } else if (obj.type === "question") {
    question(obj);
  } else {
    console.error("Type of story object wrong.");
  }
}

function description(obj){
  console.log(obj);
  $("<p>"+obj.text+"</p>\n").hide().appendTo('#story').fadeIn(1000);
  window.scrollTo(0,document.body.scrollHeight);
}

function question(obj){
  console.log(obj);
  $("<p>"+obj.text+"</p>\n").hide().appendTo('#story').fadeIn(1000)
  var list = "<ol>\n"
  for (var i = 0; i < obj.question.length; i++) {
    list += "<li><a onclick='tellStory(story,\""+obj.question[i].next+"\")'>"+obj.question[i].text+"</a></li>\n"
  }
  list += "</ol>\n"
  $(list).hide().appendTo('#story').fadeIn(1000)

  window.scrollTo(0,document.body.scrollHeight);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// init story
tellStory(story, "Start|0")
