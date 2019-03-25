/*
$.controlador = {};

$.controlador.panel_activo="";

/**
 * Método para alternar entre paneles.
 */
/*
$.controlador.activarPanel = function (panel_nuevo) {
    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo=panel_nuevo;
}



/**
 * Método para inicializar la aplicación
 *
$.controlador.init = function (panel_inicial) {
    /* 
       $ ('[id^="menu_"]'): me devuelve la lista de todas las etiquetas
        que tienen un atributo ID que comienza por "menu_".
       $ ('[id^="menu_"]').each(mi_funcion): para cada elemento de la
        lista seleccionada, llama a "mi_funcion".
 
    *
    
     $('[id^="menu_"]').each(function () {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controlador.activarPanel("#" + panel_id);
//            $('.navbar-collapse').collapse('hide');

        });
        console.log("id_menu::" + menu_id + "  id_panel" + panel_id);
    });
    
    $(".panel").hide();
    
    $.controlador.activarPanel("#"+panel_inicial);
    
}*/
/*
$('#menu li a').click(function(){
    var $this = $(this);
    var menu_id = $this.attr('id');
    var panel_id = menu_id.replace('menu_', 'panel_');

    var div1 = document.getElementById('panel_sobre');
    var div2 = document.getElementById('panel_tecno');
    var div3 = document.getElementById('panel_proyectos');
    var div4 = document.getElementById('panel_estudios');
    var div5 = document.getElementById('panel_carreras');
    
    if(div1.style.display == 'block'){
        div2.style.display = 'none';
        div1.style.display = 'block';
    }
    if(div2.style.display == 'block'){
        div2.style.display = 'none';
        div1.style.display = 'block';
    }
    if(div2.style.display == 'block'){
        div2.style.display = 'none';
        div1.style.display = 'block';
    }
    if(div2.style.display == 'block'){
        div2.style.display = 'none';
        div1.style.display = 'block';
    }else{
       div2.style.display = 'block';
       div1.style.display = 'none';
      }
}
    
  });

  function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }

*/

$('#menu li a').on('click', function(){
    $(this).attr('id').replace('menu_', 'panel_').removeClass('hidden');
    $(this).attr('id').replace('menu_', 'panel_').addClass('.panel');
    $('li a.nav-link activo').attr('id').replace('menu_', 'panel_').removeClass('panel');
    $('li a.nav-link activo').attr('id').replace('menu_', 'panel_').addClass('.hidden');
    $('li a.nav-link activo').removeClass('nav-link activo');
    
    /*$(this).getElementById('panel_sobre').removeClass('panel');
    $(this).getElementById('panel_sobre').addClass('.hidden');
    $(this).getElementById('panel_tecno').removeClass('panel');
    $(this).getElementById('panel_tecno').addClass('.hidden');
    $(this).getElementById('panel_proyectos').removeClass('panel');
    $(this).getElementById('panel_proyectos').addClass('.hidden');
    $(this).getElementById('panel_estudios').removeClass('panel');
    $(this).getElementById('panel_estudios').addClass('.hidden');
    $(this).getElementById('panel_carrera').removeClass('panel');
    $(this).getElementById('panel_carrera').addClass('.hidden');
   
    var $this = $(this);
    var menu_id = $this.attr('id');
    var panel_id = menu_id.replace('menu_', 'panel_');
    $(this).getElementById(panel_id).removeClass('.hidden');
    $(this).getElementById(panel_id).addClass('panel');*/
   
    $(this).addClass('nav-link activo');
    
    //$(this).removeClass('hidden');
    
});