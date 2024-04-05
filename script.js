document.addEventListener("DOMContentLoaded", function () {
  // Das Menü wird erst erstellt, wenn das HTML komplett geladen wurde
  makeMenu();
});

function makeMenu() {
  // HTML Template auslesen
  var template = document.getElementById("template-menu-item").innerHTML;

  var menu_ausgabe = "";
  // HTML Template mit Daten aus dem Array belegen
  // Die Schleife wird so oft wiederholt, wie planetObj.length also die Anzahl der Einträge im Array
  for (var count = 0; count < planetObj.length; count++) {
    // Der Platzhalter {{img}} wird durch das entsprechende Bild ersetzt
    // und bei jedem Durchlauf an das menu_ausgabe angehaengt
    menu_ausgabe =
      menu_ausgabe + template.replace(/{{img}}/g, planetObj[count].img);
  }

  // das generierte Menü ausgeben
  document.getElementById("menu").innerHTML = menu_ausgabe;

  // Alle Menüpunkte auslesen und in akt_menu_items schreiben
  var akt_menu_items = document.querySelectorAll(".menu-item");
  // Click Listener für jeden Menüpunkt hinzufügen
  for (let i = 0; i < akt_menu_items.length; i++) {
    akt_menu_items[i].addEventListener("click", (e) => {
      // bei Click auf einen Menüpunkt wird die Funktion setMenu aufgerufen
      // und der Index i als Parameter mitgegeben
      setMenu(i);
    });
  }

  // 0,5 Sekunden wird der erste Menüpunkt aktiviert
  setTimeout(() => {
    setMenu(0);
  }, 500);
}

function setMenu(menu_aktiv) {
  // Alle Menüpunkte auslesen
  var akt_menu_items = document.querySelectorAll(".menu-item");
  // Alle Menüpunkte durchlaufen
  for (let j = 0; j < akt_menu_items.length; j++) {
    // von jedem Menüpunkt die Klasse aktiv entfernen
    akt_menu_items[j].classList.remove("aktiv");
    // dem aktuelln Menüpunkt die Klasse aktiv hinzufügen
    if (menu_aktiv == j) {
      akt_menu_items[j].classList.add("aktiv");
    }
  }
  setContent(menu_aktiv);
}

function setContent(menu_aktiv) {
  // HTML Template auslesen
  var template = document.getElementById("template-content").innerHTML;
  // HTML Template mit Daten aus dem Array belegen
  var content_ausgabe = "";
  content_ausgabe = template
    .replace(/{{name}}/g, planetObj[menu_aktiv].name)
    .replace(/{{info}}/g, planetObj[menu_aktiv].info)
    .replace(/{{distance}}/g, planetObj[menu_aktiv].distance)
    .replace(/{{moons}}/g, planetObj[menu_aktiv].moons)
    .replace(/{{diameter}}/g, planetObj[menu_aktiv].diameter)
    .replace(/{{rotation}}/g, planetObj[menu_aktiv].rotation)
    .replace(/{{temperature}}/g, planetObj[menu_aktiv].temperature)
    .replace(/{{gravitation}}/g, planetObj[menu_aktiv].gravitation)
    .replace(/{{distancesun}}/g, planetObj[menu_aktiv].distancesun)
    .replace(/{{surface}}/g, planetObj[menu_aktiv].surface)
    .replace(/{{age}}/g, planetObj[menu_aktiv].age);
  document.getElementById("content").innerHTML = content_ausgabe;
}
