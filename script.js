if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
async function createTicket() {
  var API_KEY = "6ReCaAqI4JjSQwyVqxz";
  var FD_ENDPOINT = "newaccount1613820530206.freshdesk.com";
  var FD_ENDPOINT_CONTACT = "newaccount1613820530206.freshdesk.com";
  var ticketBody = {
    helpdesk_ticket: {
      subject: "Sample ticket from JavaScript",
      description: "Sample ticket from JavaScript",
      email: "example@example.com",
      priority: 1,
      status: 2,
      id: 7,
    },
  };
  var contactBody = {
    helpdesk_contact: {
      name: "sample",
      email: "example@example.com",
      phone: "1 234 567 8900",
    },
  };

  var params = {
    hostname: FD_ENDPOINT,
    path: "/helpdesk/tickets.json",
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Content-length": JSON.stringify(ticketBody).length,
    },
    auth: API_KEY + ":X",
  };

  var parameters = {
    hostname: FD_ENDPOINT_CONTACT,
    path: "/helpdesk/contacts.json",
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Content-length": JSON.stringify(contactBody).length,
    },
    auth: API_KEY + ":X",
  };

  var req = https.request(params);
  req.write(JSON.stringify(ticketBody));
  var res = req.end();

  var secRequest = https.request(parameters);
  secRequest.write(JSON.stringify(contactBody));
  var res = secRequest.end();
}

async function getTickets() {
  var API_KEY = "6ReCaAqI4JjSQwyVqxz";
  var FD_ENDPOINT =
    "https://newaccount1613820530206.freshdesk.com//api/v2/tickets";

  var response = await fetch(FD_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(API_KEY + ":X"),
    },
  });

  return response.json();
}

async function getContacts() {
  var API_KEY = "6ReCaAqI4JjSQwyVqxz";
  var FD_ENDPOINT_CONTACT =
    "https://newaccount1613820530206.freshdesk.com//api/v2/contacts";

  var response = await fetch(FD_ENDPOINT_CONTACT, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(API_KEY + ":X"),
    },
  });

  return response.json();
}

function listTickets() {
  var x = document.getElementById("form");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("outputArea");
  y.style.display = "block";
  getTickets()
    .then((data) => {
      console.log(data);
      var targetDiv = document.getElementById("outputArea");

      while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.lastChild);
      }
      var table1 = document.createElement("table");
      table1.setAttribute("class", "table");

      var tableHead = document.createElement("thead");

      var trInHead = document.createElement("tr");

      var th1 = document.createElement("th");
      th1.setAttribute("scope", "col");
      th1.innerHTML = "S.No";

      var th2 = document.createElement("th");
      th2.setAttribute("scope", "col");
      th2.innerHTML = "Subject";

      var th3 = document.createElement("th");
      th3.setAttribute("scope", "col");
      th3.innerHTML = "Type";

      var th4 = document.createElement("th");
      th4.setAttribute("scope", "col");
      th4.innerHTML = "Priority";

      var th5 = document.createElement("th");
      th5.setAttribute("scope", "col");
      th5.innerHTML = "Status";

      var th6 = document.createElement("th");
      th6.setAttribute("scope", "col");
      th6.innerHTML = "Id";

      trInHead.append(th1, th2, th3, th4, th5, th6);
      tableHead.appendChild(trInHead);

      var tableBody = document.createElement("tbody");

      for (let i = 0; i < data.length; i++) {
        var trInBody = document.createElement("tr");

        var thInTr = document.createElement("th");
        thInTr.setAttribute("scope", "row");
        thInTr.innerHTML = i + 1;

        var td1 = document.createElement("td");
        td1.innerHTML = data[i].subject;

        var td2 = document.createElement("td");
        td2.innerHTML = data[i].type;

        var td3 = document.createElement("td");
        td3.innerHTML = data[i].priority;

        var td4 = document.createElement("td");
        td4.innerHTML = data[i].status;

        var td5 = document.createElement("td");
        td5.innerHTML = data[i].id;

        trInBody.append(thInTr, td1, td2, td3, td4, td5);
        tableBody.appendChild(trInBody);
      }

      table1.append(tableHead, tableBody);
      targetDiv.appendChild(table1);

      document.getElementById("listTickets").blur();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function listContacts() {
  var x = document.getElementById("form");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("outputArea");
  y.style.display = "block";
  getContacts()
    .then((data) => {
      console.log(data);
      var targetDiv = document.getElementById("outputArea");

      while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.lastChild);
      }
      var table1 = document.createElement("table");
      table1.setAttribute("class", "table");

      var tableHead = document.createElement("thead");

      var trInHead = document.createElement("tr");

      var th1 = document.createElement("th");
      th1.setAttribute("scope", "col");
      th1.innerHTML = "S.No";

      var th2 = document.createElement("th");
      th2.setAttribute("scope", "col");
      th2.innerHTML = "E mail";

      var th3 = document.createElement("th");
      th3.setAttribute("scope", "col");
      th3.innerHTML = "Name";

      var th4 = document.createElement("th");
      th4.setAttribute("scope", "col");
      th4.innerHTML = "Phone No";

      var th5 = document.createElement("th");
      th5.setAttribute("scope", "col");
      th5.innerHTML = "Id";

      trInHead.append(th1, th2, th3, th4, th5);
      tableHead.appendChild(trInHead);

      var tableBody = document.createElement("tbody");

      for (let i = 0; i < data.length; i++) {
        var trInBody = document.createElement("tr");

        var thInTr = document.createElement("th");
        thInTr.setAttribute("scope", "row");
        thInTr.innerHTML = i + 1;

        var td1 = document.createElement("td");
        td1.innerHTML = data[i].email;

        var td2 = document.createElement("td");
        td2.innerHTML = data[i].name;

        var td3 = document.createElement("td");
        td3.innerHTML = data[i].phone;

        var td4 = document.createElement("td");
        td4.innerHTML = data[i].id;

        trInBody.append(thInTr, td1, td2, td3, td4);
        tableBody.appendChild(trInBody);
      }

      table1.append(tableHead, tableBody);
      targetDiv.appendChild(table1);

      document.getElementById("listTickets").blur();
    })
    .catch(function (error) {
      console.log(error);
    });
}

var API_KEY = "6ReCaAqI4JjSQwyVqxz";
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  fetch("https://newaccount1613820530206.freshdesk.com//api/v2/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      phone: phone,
    }),
    headers: {
      Authorization: "Basic " + btoa(API_KEY + ":X"),
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

function addContacts() {
  var x = document.getElementById("form");
  x.style.display = "block";
  var y = document.getElementById("outputArea");
  y.style.display = "none";
}

var API_KEY = "6ReCaAqI4JjSQwyVqxz";
var form = document.getElementById("statusForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var id = document.getElementById("id").value;
  var updatedStatus = document.getElementById("status").value;

  fetch(`https://newaccount1613820530206.freshdesk.com//api/v2/tickets/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      status: parseInt(updatedStatus),
    }),
    headers: {
      Authorization: "Basic " + btoa(API_KEY + ":X"),
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

var API_KEY = "6ReCaAqI4JjSQwyVqxz";
var form = document.getElementById("priorityForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var idP = document.getElementById("idp").value;
  var updatedPriority = document.getElementById("priority").value;

  fetch(
    `https://newaccount1613820530206.freshdesk.com//api/v2/tickets/${idP}`,
    {
      method: "PUT",
      body: JSON.stringify({
        priority: parseInt(updatedPriority),
      }),
      headers: {
        Authorization: "Basic " + btoa(API_KEY + ":X"),
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

var API_KEY = "6ReCaAqI4JjSQwyVqxz";
var form = document.getElementById("Updateform");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var UPid = document.getElementById("UPid").value;
  var UPemail = document.getElementById("UPemail").value;
  var UPname = document.getElementById("UPname").value;
  var UPphone = document.getElementById("UPphone").value;

  fetch(
    `https://newaccount1613820530206.freshdesk.com//api/v2/contacts/${UPid}`,
    {
      method: "PUT",
      body: JSON.stringify({
        email: UPemail,
        name: UPname,
        phone: UPphone,
      }),
      headers: {
        Authorization: "Basic " + btoa(API_KEY + ":X"),
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

function updateStatus() {
  var x = document.getElementById("statusForm");
  x.style.display = "block";
  var y = document.getElementById("outputArea");
  y.style.display = "none";
}

function updatePriority() {
  var x = document.getElementById("priorityForm");
  x.style.display = "block";
  var y = document.getElementById("outputArea");
  y.style.display = "none";
}

function updateContacts() {
  var x = document.getElementById("Updateform");
  x.style.display = "block";
  var y = document.getElementById("outputArea");
  y.style.display = "none";
}
