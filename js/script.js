//Funkcja z przyciskiem

//Szukamy elementu z id 'button' i dodajemy onclick -tworzymy funkcje:
document.getElementById('button').onclick = function() {
  //Szukamy elementu z id 'confirm' i zmieniamy tekst html po nacisnieciu przycisku:
  document.getElementById('confirm').innerHTML ='Order placed. Chcek email for confrimation';
  //Sprawiamay ze po nacisnieciu przycisk znika:
  document.getElementById('button').style.display = 'none';
};
