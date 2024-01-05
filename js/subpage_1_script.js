var agents_info = [
  {name: "Elsa",
  phone: "443-424-5566",
   email: "elsa@gmail.com"
  },
    {name: "Anna",
  phone: "410-989-5524",
   email: "anna@gmail.com"
  },
    {name: "Christov",
  phone: "518-854-2569",
   email: "chris@gmail.com"
  },
    {name: "Hans",
  phone: "885-426-2247",
   email: "hans@gmail.com"
  }
    
];

addAgents();

function addAgents() {
    var input, image, agent, n;

    for (var i = 0; i < 4; i++) {
        n = String(i+1);
        agent = agents_info[i];
        input = document.getElementById("agent_" + n );
        image = document.getElementById("img_" + n);

        input.value = agent.name;
        image.src = "yzhang518.github.io/img/agent_" + n + ".jpg";
        
        document.getElementById("name_" + n).innerHTML = agent.name;
        document.getElementById("phone_" + n).innerHTML = agent.phone;
        document.getElementById("email_" + n).innerHTML = agent.email;
        
    }
}


