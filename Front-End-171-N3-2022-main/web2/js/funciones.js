function calcularPesoIdeal(){
    //Obtenemos la edad
    var edad = document.getElementById('txt_edad').value;
    
    //Calculamos el peso ideal
    var peso_ideal = edad * 2 + 8;

    //Desplegamos el resultado en pantalla
    var contenedor_resultado = document.getElementById('cnt_resultado_texto_peso_ideal');
    contenedor_resultado.innerHTML = "<b>Peso ideal : </b>" + peso_ideal + " kilos.";

    // Calculamos el estado de peso
    calcularEstadoPeso(peso_ideal);
}
function calcularEstadoPeso(peso_ideal){
    // Obtenemos el peso actual
    var peso_actual = document.getElementById('txt_peso_actual').value;

    //Efectuamos una comparación para determinar el estado de peso
    var estadoPeso = "";
    var imagen = "";
    if(peso_actual == peso_ideal){
        estadoPeso="Peso Ideal";
        imagen = "peso_ideal";
    }else{
        if(peso_actual > peso_ideal){
            estadoPeso = "Sobrepeso";
            imagen="sobre_peso";
        }else{
            estadoPeso = "Bajopeso";
            imagen = "bajo_peso";
        }
    }
    //Mostramos estado de peso
    var contenedor_texto_estado_peso = document.getElementById('cnt_resultado_texto_estado_peso');
    contenedor_texto_estado_peso.innerHTML ="<b>Estado peso :</b>" + estadoPeso;
    //Mostramos imagen
    var contenedor_imagen_estado_peso = document.getElementById('cnt_resultado_imagen_estado_peso');
    contenedor_imagen_estado_peso.innerHTML = "<img src=img/" + imagen+"_256x256.png>";

}