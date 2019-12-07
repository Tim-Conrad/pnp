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
          "text" : "Augen öffnen",
          "next" : "Schlafzimmer|1"
        }
      ]
    }
  ],
  // rooms
  "Schlafzimmer" : [
    {
      "type" : "description",
      "text" : "Um dich fühlt sich alles sehr weich und warm an. Etwas weiches und schweres leigt auf dir. Du streckst dich. Du liegst in einem Bett. Und du öffnest die Augen, es ist dein Bett.",
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
      "text" : "[LOGIK] Du hast wohl wieder einen Mittagsschlaf gemacht, der Geschmack nach Alkohol in deinem Mund deutet auf eine Feier hin. Der Uhrzeit nach zuschliessen war es wohl ein Brunch und kein Party am Abend.",
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
          "text" : "Aufstehen und in den Flur gehen.",
          "next" : "Schlafzimmer|8"
        }
      ]
    },
    {
      "type" : "question",
      "text" : "Würfel, ob du dich errinern kannst. (Über 10 Errinerung geschafft.)",
      "question": [
        {
          "text" : "Du hast dich errinert...",
          "next" : "Schlafzimmer|7"
        },
        {
          "text" : "Du hast dich leider nicht errinert...",
          "next" : "Schlafzimmer|8"
        }
      ]
    },
    {
      "type" : "description",
      "text" : "Du errinerst dich, deine Geschenke liegen im Wohnzimmer. Aber dir fällt nicht mehr ein was du genau bekommen hast. Besonders das Geschenk von Anna und Tim interessiert dich. Du trittst in den Flur.",
      "next" : "Schlafzimmer|8"
    },
    {
      "type" : "description",
      "text" : "Mehrer Bierflaschen stehen im Flur, dein Blick fällt entlang der Gaderobe richtung Küche, Arbeitszimmer und Wohnzimmer. Neben dir ist das Badezimmer.",
      "next" : "Flur|0"
    }
  ],
  "Badezimmer" : [
    {
      "type" : "description",
      "text" : "\"BESETZT!\" ruft es aus dem Klo also du die Klinke runter drückst. \"Dann schließ doch ab\" rufst du zurück und trittst zurück in den Flur.",
      "next" : "Flur|1"
    },
    {
      "type" : "description",
      "text" : "[WAHRNEHMUNG] Die Türe ist jetzt verschossen, du trittst zurück in den Flur.",
      "next" : "Flur|1"
    }
  ],
  "Flur" : [
    {
      "type" : "question",
      "text" : "Wohin willst du gehen?",
      "question": [
        {
          "text" : "Badezimmer",
          "next" : "Badezimmer|0"
        },
        {
          "text" : "Küche",
          "next" : "Küche|0"
        },
        {
          "text" : "Arbeitszimmer",
          "next" : "Arbeitszimmer|0"
        },
        {
          "text" : "Wohnzimmer",
          "next" : "Wohnzimmer|0"
        },
        {
          "text" : "Schlafzimmer, leg dich einfach wieder hin...",
          "next" : "Start|0"
        }
      ]
    },
    {
      "type" : "question",
      "text" : "Wohin willst du gehen?",
      "question": [
        {
          "text" : "Badezimmer",
          "next" : "Badezimmer|1"
        },
        {
          "text" : "Küche",
          "next" : "Küche|0"
        },
        {
          "text" : "Arbeitszimmer",
          "next" : "Arbeitszimmer|0"
        },
        {
          "text" : "Wohnzimmer",
          "next" : "Wohnzimmer|0"
        },
        {
          "text" : "Schlafzimmer, du legst dich einfach wieder hin...",
          "next" : "Start|0"
        }
      ]
    },
    {
      "type" : "question",
      "text" : "Wohin willst du gehen?",
      "question": [
        {
          "text" : "Badezimmer",
          "next" : "Badezimmer|1"
        },
        {
          "text" : "Küche",
          "next" : "Küche|0"
        },
        {
          "text" : "Arbeitszimmer",
          "next" : "Arbeitszimmer|6"
        },
        {
          "text" : "Wohnzimmer",
          "next" : "Wohnzimmer|0"
        },
        {
          "text" : "Schlafzimmer, du legst dich einfach wieder hin...",
          "next" : "Start|0"
        }
      ]
    }
  ],
  "Küche" : [
    {
      "type" : "description",
      "text" : "Was für ein durcheinander, du blickst dich um. Flaschen und Teller über all verstreut. Alles ist dreckig.",
      "next" : "Küche|1"
    },
    {
      "type" : "description",
      "text" : "[IDEE] Dir kommt die Idee du hättest deine Gäste verpflichten sollen beim Aufräumen zu helfen. Leider zu spät. Vllt. hilft der verblieben Gast vom Klo ja mit. Fragen willst du ihn aber lieber noch nicht.",
      "next" : "Flur|1"
    }
  ],
  "Arbeitszimmer" : [
    {
      "type" : "description",
      "text" : "[WAHRNEHMUNG] Ein gruseliges Flackern kommt aus dem Türspalt des Arbeitszimmer.",
      "next" : "Arbeitszimmer|1"
    },
    {
      "type" : "description",
      "text" : "[ERINNERN] Du glaubst du wolltest irgendwas in diesem raum machen. Und das es wichtig war...",
      "next" : "Arbeitszimmer|2"
    },
    {
      "type" : "question",
      "text" : "Raum betreten oder wieder zurück in den Flur?",
      "question": [
        {
          "text" : "Du betrittst das Arbeitszimmer...",
          "next" : "Arbeitszimmer|3"
        },
        {
          "text" : "Du gehst wieder in den Flur...",
          "next" : "Flur|2"
        }
      ]
    },
    {
      "type" : "description",
      "text" : "Das Flackern kommt von deinem geöffneten Laptop. Du schaust näher hin und findest den ein echt interessantes Rollenspiel.",
      "next" : "Arbeitszimmer|4"
    },
    {
      "type" : "description",
      "text" : "Die Bewertungen sind unglaublich. 10 von 10 Punkten. Das Beste Rollenspiel des Jahres. Muss man einfach kaufen!. War das nicht Teil von Annas und Tims Geschenk?",
      "next" : "Arbeitszimmer|5"
    },
    {
      "type" : "description",
      "text" : "Aber du scheinst einen Code zu brauchen um das Spiel installieren zu können. Wo bekommst du nur den Code her? Du gehst in den Flur.",
      "next" : "Flur|2"
    },
    {
      "type" : "description",
      "text" : "Du betittst das Zimmer und sitzt wieder vor dem Laptop.",
      "next" : "Arbeitszimmer|7"
    },
    {
      "type" : "question",
      "text" : "Kennst du den Code?",
      "question": [
        {
          "text" : "Code eingeben...",
          "next" : "Code|0"
        },
        {
          "text" : "Du gehst wieder in den Flur...",
          "next" : "Flur|2"
        }
      ]
    }
  ],
  "Wohnzimmer" : [
    {
      "type" : "description",
      "text" : "Du betittst das Wohnzimmer, plötzlich springt dir Jonas mit seiner Rollenspiel Axt entgegen. Und fordert dich zum Zweikampf auf!",
      "next" : "Wohnzimmer|1"
    },
    {
      "type" : "question",
      "text" : "Was machst du?",
      "question": [
        {
          "text" : "Code eingeben...",
          "next" : "Code|0"
        },
        {
          "text" : "Du gehst wieder in den Flur...",
          "next" : "Flur|2"
        }
      ]
    }
  ],
  "Code" : [
    {
      "type" : "description",
      "text" : "Ein Eingabefeld erscheint.",
      "next" : "Code|1"
    },
    {
      "type" : "description",
      "text" : "Code: <input id='code' placeholder='Code hier eingeben'></input><button onclick='submitCode()'>Go!</button>",
      "next" : ""
    },
    {
      "type" : "description",
      "text" : "Der Code falsch. Das Eingabefeld erscheint erneut.",
      "next" : "Arbeitszimmer|7"
    },
    {
      "type" : "description",
      "text" : "Der Code ist richtig, du bekommst die folgende Angabe zu sehen.",
      "next" : "Code|4"
    },
    {
      "type" : "question",
      "text" : "\"Möchten Sie das Spiel kaufen oder das Geld für einen Guten Zweck spenden?\" Wie entscheidest du dich?",
      "question": [
        {
          "text" : "Spiel kaufen",
          "next" : "Ende|0"
        },
        {
          "text" : "Geld spenden",
          "next" : "Ende|1"
        }
      ]
    }
  ],
  "Ende" : [
    {
      "type" : "description",
      "text" : "Du hast das Spiel gekauft und bekommst von Anna und Tim den echten Code.",
      "next" : "Ende|2"
    },
    {
      "type" : "description",
      "text" : "Du nennst Anna und Tim wohin do Spenden möchtest.",
      "next" : "Ende|2"
    },
    {
      "type" : "description",
      "text" : "DAS ENDEN...",
      "next" : ""
    }
  ]
};

function submitCode(){
  if($("#code").val() == "LaraBDAY2019!"){
    tellStory(story, "Code|3")
  } else {
    tellStory(story, "Code|2")
  }
}

function tellStory(story, next){
  if(next == ""){
    return;
  }
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
