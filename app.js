const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/mock')

//1 Ubicacion

const flowLugarmadrid = addKeyword(['📷 En Madrid','fotos en madrid'])
    .addAnswer(['🌳🏰 El lugar lo escoje usted, nosotros les damos  algunas opciones donde las fotos quedan muy lindas, pero si quieres otro lugar no hay ningún problema.'],{delay: 3000,})
    .addAnswer(['Sugerencias de lugares para fotos:','- Parque Europa','- Parque Retiro','- Puerta de Alcalá','- Parque Capricho','- Parque Juan Carlos','- Palacio Real'],{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 7000,})

const flowLugarbarcelona = addKeyword(['📷 En Barcelona','fotos en barcelona'])
    .addAnswer(['🌳🏰 El lugar lo escoje usted, nosotros les damos  algunas opciones donde las fotos quedan muy lindas, pero si quieres otro lugar no hay ningún problema.'],{delay: 3000,})
    .addAnswer(['Sugerencias de lugares para fotos:','- Sagrada Familia y alrededores','- Parc de la Ciutadella','- Playa de la Barceloneta','- Plaza España y Montjuic','- Catedral de Barcelona','- Port Vell'],{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 10000,})

const flowLugares = addKeyword(['lugar para fotos','donde hacer fotos','donde haser fotos','lugares de fotos','lugar de fotos','lugares para fotos','hacer fotos','donde puedo hacer fotos','haser fotos','fotografías','fotografias'])
    .addAnswer(['🌳🏰 El lugar para las fotos lo escoje usted, nosotros les damos  algunas opciones donde las fotos quedan muy lindas, pero si quieres otro lugar no hay ningún problema.'])
    .addAnswer('*Sugerencias de lugares para fotos:*',
    {
        buttons: [
                { body: '📷 En Madrid' },
                { body: '📷 En Barcelona' },
        ],
    }
    )

const flowFotos = addKeyword(['paquete de fotos','paquete fotos','session de fotos','secion de fotos','sesion','sesión','album','album','libro de f','fotog','cesion de fot','cesión de fot','secciones de fotos','necesito fot','quiero fot','busco fot','tienen fot'])
    .addAnswer(['Disponemos de paquete de fotos, este *Incluye:*','👗Alquiler de Vestido con cancan * 4 días','📷 De 30 /40 fotos digitales','📙 + 1 álbum físico de 26 fotos','💃🏽 1 hora y media con el fotógrafo','🌅 Se realiza en exterior','💶 Precio 330 €','🚫El paquete no incluye maquillaje ni accesorios'],{delay: 10000,})
    .addAnswer('Te doy *algunas sugerencias* de lugares para fotos:',
    {
        buttons: [
                { body: '📷 En Madrid' },
                { body: '📷 En Barcelona' },
        ],
    }
    )

const flowMadrid = addKeyword(['👉 En Madrid','tienda en Madrid','tienda de Madrid','desde madrid','de madrid','estoy en madrid','vivo en madrid'])
    .addAnswer(['Estamos ubicados en','Calle Orense 5, Piso 7','🚃 Metro Nuevos Ministerios','*Horario*', 'De Lunes a Viernes de 4:00 a 8:00 pm','Sábados de 10:00 am a 2:00 pm'])
    .addAnswer('🗓️🕒 Atendemos *solo con cita previa*!',{delay: 6000,})
    .addAnswer(['Puedes pedir una cita aquí:','www.citas.vestidos15.es'],{delay: 7000,})

const flowBarcelona = addKeyword(['👉 En Barcelona','tienda en Barcelona','tienda de barcelona','estoy en Barcelona','desde barcelona','de barcelona','de hospitalet','desde hospitalet','vivo en barcelona'])
    .addAnswer(['Estamos ubicados en','Carrer de Blas Fernández de Lirola, 54','Hospitalet de Llobregat','*Horario*', 'De lunes a viernes de 5:00 a 8:00 pm','Sábados de 4:00 a 7:00 pm'])
    .addAnswer('🗓️🕒 Atendemos *solo con cita previa*!',{delay: 6000,})
    .addAnswer(['Puedes pedir una cita aquí:','www.citas.vestidos15.es'],{delay: 7000,})

const flowTiempo = addKeyword(['cuanto tiempo', 'anticipación', 'cuánto tiempo', 'anticipación', 'meses antes', 'semanas antes', 'antelación', 'antelacion','Cuando debo ir','tiempo antes','antisipación','antisipacion'])
    .addAnswer(['El tiempo dependerá:','- Para los modelos en *Venta*, dependiendo del modelo que elijas puede tardar desde 2 semanas hasta 6 meses.','- En *Alquiler* te recomendamos venir con 3 o 4 meses de antelación, de esta manera tendrás muchísima variedad para elegir'],{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 7000,})

const flowUbicacion = addKeyword(['ubica','uvica','dirección','direccion','direcion','diresion','donde queda','esta la tienda','tienen tienda','indicar como llegar','cuando podría ir','cuando podria ir','pedir una cita','donde esta','donde queda','madrid o barcelona','barcelona o madrid','una sita','tienda fisica','tienda física','ubicación','ubicacion','pedir cita','una cita','sacar una sita','sacar una cita','como llegar','hacer la cita','haser la cita','haser la sita','hacer la sita','dar la cita','dar la sita','donde esta la tienda','dónde está la tienda','donde estan','donde son','dónde son'])
    .addAnswer('Tenemos tiendas en *Barcelona* y en *Madrid*, también hacemos envíos a toda Europa 📦🌍',{delay: 7000,})
    .addAnswer('*¿Dónde prefieres ver nuestros vestidos?*',
    {
            buttons: [
                { body: '👉 En Madrid' },
                { body: '👉 En Barcelona' },
                { body: '📱 Por Videollamada' },
        ],
    }
    )

const flowEspana = addKeyword(['España 🌹','de Bilbao','de Galicia','de Valencia','de Alicante','de Murcia','de zaragoza','de badajoz','en bilbao','en galicia','en valencia','en alicante','en murcia','en badajoz','en zaragoza','desde Bilbao','desde Galicia','desde Valencia','desde Alicante','desde Murcia','desde zaragoza','desde badajoz','en coruña','desde coruña','de coruña','desde santiago','en santiago','de santiago','en londres','de londres','desde londres','en reino unido','desde reino unido','de reino unido'])
    .addAnswer('Los vestidos en *Alquiler y Venta* los enviamos *a toda España*',{delay: 2000,})
    .addAnswer(['Te envío nuestro catálogo de vestidos disponibles para *Alquiler y Venta*:','catalogo.vestidos15.es'],{delay: 8000,})
    .addAnswer(['Puedes pedir una *por Videollamada* aquí:','www.citas.vestidos15.es'],{delay: 7000,})


const flowFuera = addKeyword(['Fuera de España 📦🌍','fuera de España','extranjero','colombia','Venezuela','Uruguay'])
    .addAnswer(['Genial! Los vestidos *en Venta* los enviamos *a todo el mundo*!! ✈️📦','En cuanto a los vestidos de alquiler, de momento no hacemos envios al extranjero'],{delay: 4000,})
    .addAnswer(['Puedes *comprar nuestros vestidos* y calcular el precio de envío directamente en nuestra web','www.vestidos15.es'],{delay: 6000,})

const flowNovias = addKeyword(['novia','novias'])
    .addAnswer('Disculpa, por el momento no tenemos disponibles vestidos de novia.',{delay: 2000,})
    .addAnswer('Constantemente sacamos nuevos productos','Siguenos en nuestras redes para ser la primera en enterarte:',{delay: 3000,})
    .addAnswer('www.instagram.com/vestidos15/',{delay: 1000,})
    .addAnswer('www.tiktok.com/@vestidos15__',{delay: 1000,})

const flowPrecios = addKeyword(['Cuanto cuestan los vestidos','precio de los vestidos','precio tienen','cuánto cuestan los vestidos','cuanto vale este','que vale este','qué vale este','cuanto valen los vestidos','cuánto valen los vestidos','precio de los vestidos','precio alquiler','precio de este enventa','cual es el valor','precio alquiler','precio alkiler','precio del alquiler','precio del alkiler','precio en alquiler','precio en alkiler','queria cotizar','queria kotizar','el costo','cuanto sale','cuánto sale'])
    .addAnswer(['Tenemos muchísimas opciones de vestidos que te encantarán 😍','En *Alquiler* desde 80€ a 160€','En *Venta* desde 199€ a 999€'])
    .addAnswer('*Los accesorios* tienen *descuentos* reservando tu vestido.',{delay: 8000,})
    .addAnswer('Cuanto *antes vengas* más opciones de vestidos tendrás para elegir ',{delay: 5000,})
    .addAnswer(['Pide tu cita aquí:','www.citas.vestidos15.es'],{delay: 3000,})

const flowProbar = addKeyword(['puede probar','pueden probar','quiero probar','para probar'])
    .addAnswer(['Sí, los vestidos se pueden probar 🙂'],{delay: 3000,})
    .addAnswer('*¿Dónde prefieres ver nuestros vestidos?*',
    {
            buttons: [
                { body: '👉 En Madrid' },
                { body: '👉 En Barcelona' },
                { body: '📱 Por Videollamada' },
        ],
    }
    )

const flowRecoger = addKeyword(['recoger','recogida','ir a buscar','entrega','devolución','devolucion','devolver'])
    .addAnswer(['*Entrega:*','Las entregas se hacen los viernes de 5 a 7 de la tarde','*Devolución:*','Las devoluciones se deben hacer el lunes, entre las 5 y la 7 de la tarde'],{delay: 3000,})

//2 Servicios
const flowServicios = addKeyword(['Servicios','servicio','quiero información', 'quiero informacion','queria informacion','quería informacion','quería información','tienen','necesito','este vestido','este estilo','solo por un dia','estoy buscando un','estoy buscando una','Tienen vestidos','fb.me','venta','https://fb','bestido','Cumplo quince años','fotos de los vestidos','ocupo','interesad','pedir cita'])
    .addAnswer(['Te cuento, en Vestidos 15 te ofrecemos Vestidos en *Alquiler* o en *Venta* para tu fiesta de 15 años.','','También tenemos vestidos para Damas, Invitaciones, y accesorios para la quinceañera como Tiaras y coronas, cojines para la Sandalia, collares, etc'],{delay: 5000,})
    .addAnswer('Si también quieres *fotos en tu fiesta* o *en un parque*, disponemos de *Paquetes de Fotos con vestido incluido.*',{delay: 3000,})
    .addAnswer('*¿Dónde prefieres ver nuestros vestidos?*',
    {
            buttons: [
                { body: '👉 En Madrid' },
                { body: '👉 En Barcelona' },
                { body: '📱 Por Videollamada' },
        ],
    }
    )

const flowAccesorios = addKeyword(['precio de la','precio del cojin','precio de las','precio del ramo'])
    .addAnswer(['Puedes ver los precios de algunos de nuestros accesorios, invitaciones y complementos en nuestra web:','www.vestidos15.es'],{delay: 3000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 5000,})

const flowAlquiler = addKeyword(['funciona el alquiler','paga y señal','fianza'])
    .addAnswer(['*Vestido:*','Para alquilar es necesario un documento de identidad y 100€ de fianza que se devuelven al entregar el vestido.','El alquiler del vestido es por 4 días, se entrega el viernes y la devolución es el lunes.','*Envio:*','Si el alquiler necesitas que te lo enviemos son aproximadamente +€30 del envío (Incluye ida y regreso), si lo recoges y lo entregas en tienda no tiene coste.','*Entrega:*','Las entregas se hacen los viernes de 5 a 7 de la tarde','*Devolución:*','Las devoluciones se deben hacer el lunes, entre las 5 y la 7 de la tarde'],{delay: 3000,})
    .addAnswer(['Pide ya tu cita aquí para tener más opciones de vestidos:','www.citas.vestidos15.es'],{delay: 7000,})

const flowEmbajadoras = addKeyword(['Embajadoras','Programa'])
    .addAnswer(['Por el momento no tenemos disponible el programa de embajadoras, pero no te preocupes, constantemente sacamos nuevas convocatorias.','Siguenos en nuestras redes para ser la primera en enterarte:'],{delay: 2000,})
    .addAnswer('www.instagram.com/vestidos15/',{delay: 1000,})
    .addAnswer(['www.tiktok.com/@vestidos15__'],{delay: 1000,})

const flowModelaje = addKeyword(['Clases de modelaje','modelaje'])
    .addAnswer(['Por el momento no tenemos disponibles clases de modelaje, pero no te preocupes, constantemente sacamos nuevas actividades.','Siguenos en nuestras redes para ser la primera en enterarte:'],{delay: 2000,})
    .addAnswer('www.instagram.com/vestidos15/',{delay: 1000,})
    .addAnswer('www.tiktok.com/@vestidos15__',{delay: 1000,})

const flowDesfile = addKeyword(['desfile'])
    .addAnswer(['En *Madrid*, tenemos un desfile el 10 de Febrero de 2023.','La dirección es “Salones Venecia”, en la Calle Carolina Coronado 1 a las *20.00h*','El boleto cuesta 5€',''],{delay: 2000,})
    .addAnswer(['En *Barcelona* pronto haremos también un desfile','Siguenos en nuestras redes para ser la primera en enterarte:'],{delay: 4000,})
    .addAnswer('www.instagram.com/vestidos15/',{delay: 1000,})
    .addAnswer('www.tiktok.com/@vestidos15__',{delay: 1000,})

const flowPagoaplazos = addKeyword(['pagando poco a poco', 'pago a plazos', 'pago aplazado'])
    .addAnswer(['Sí, puedes pagar en tantos plazos como necesites para tu vestido de Alquiler o de Venta.','Ahora bien, el vestido solamente se te entregará o se te enviará cuando hayas abonado el importe total.',''],{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 7000,})

const flowDecoracion = addKeyword(['decoracion'])
    .addAnswer('Nosotros no hacemos decoración para fiestas, pero podemos recomendarte muy buenas decoradoras cuando vengas a tu cita.',{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 5000,})

const flowRecuerdos = addKeyword(['recuerdos'])
    .addAnswer('Algunos recuerdos que tenemos disponibles son:')
    .addAnswer(['*Las muñecas* son de 13 de alto * 6 ancho, vienen con cinta  y una tarjeta pequeña que se combina según el color del vestido o decoración de la fiesta y viene escrito el Nombre de la Quinceañera y la fecha de su cumpleaños','*Precio:* €2.50/unidad'],{media:'https://xn--quinceaos-r6a.es/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-18-at-12.06.02.jpeg'},{delay: 2000,})
    .addAnswer(['*Los llaveros*, vienen contramarcados con el Nombre de la quinceañera y la fecha de su cumpleaños','*Precio:* €2.50/unidad'],{media:'https://xn--quinceaos-r6a.es/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-18-at-12.06.04.jpeg'},{delay: 5000,})
    .addAnswer(['Disponemos de más recuerdos que te encantarán 😍','Pide tu cita para venir a ver todos nuestros recuerdos disponibles:','www.citas.vestidos15.es'],{delay: 12000,})

const flowPrecioenvio = addKeyword(['cuesta el envio a','con el envio'])
    .addAnswer(['El precio del envío dependerá del tamaño del paquete, no solamente del destino.','Ten en cuenta que nosotros no ganamos nada por el envío y buscamos siempre la alternativa más adecuada y económica para que tengas tu vestido a tiempo.','Por ejemplo: el envío de un vestido ida/vuelta de alquiler dentro de España ronda los 30€'],{delay: 2000,})
    .addAnswer('Ofrecemos un servicio online por *videollamada*, donde te enseñaremos nuestra colección de vestidos.',{delay: 5000,})
    .addAnswer('¿Desde dónde nos escribes?',
    {
            buttons: [
                { body: 'España 🌹' },
                { body: 'Fuera de España 📦🌍' },
        ],
    }
    )

const flowTallas = addKeyword(['su talla','la talla','talla de','le queda','le queda el vestido','le quedara el vestido','ajusta','corset','corse','medidas'])
    .addAnswer(['Tenemos vestidos en todas las tallas, pero igualmente todos los vestidos tienen corset ajustable'],{delay: 3000,})
    .addAnswer(['Si no sabes cual es la talla puedes usar nuestra guía de tallas:','guiadetallas.vestidos15.es'],{delay: 3000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más tallas para escoger*:','www.citas.vestidos15.es'],{delay: 5000,})

const flowDamas = addKeyword(['vestidos de dama','dama'])
    .addAnswer(['Te mando algunos de nuestros modelos de Dama'])
    .addAnswer('https://quinceaños.es/producto/vestido-corto-blanco-dama-acompanantes/',{delay: 5000,})
    .addAnswer(['https://quinceaños.es/producto/vestido-corto-vivi-rojo-2/'],{delay: 2000,})
    .addAnswer(['https://quinceaños.es/producto/vestido-corto-vivi-rosa-2/'],{delay: 2000,})
    .addAnswer(['https://quinceaños.es/producto/vestido-corto-vivi-vino-2/'],{delay: 2000,})
    .addAnswer(['https://quinceaños.es/producto/vestido-corto-vivi-azul-2/'],{delay: 2000,})
    .addAnswer(['https://quinceaños.es/producto/vestido-corto-vivi-fucsia-2/'],{delay: 2000,})
    .addAnswer(['Dependiendo del modelo de estos vestidos que te he enviado, el Alquiler ronda los 20€ y en venta unos 75€'],{delay: 4000,})

const flowSaludo = addKeyword(['hola','buenas t','buenos d','buenas n','ola','contesta','la llamada','estoy llamando','llame','responde','conteste'])
    .addAnswer(['Hola! Gracias por escribir a *Vestidos15*, habla Maria.','¿En qué puedo ayudarte?'],{delay: 4000,})


const flowHumano = addKeyword(['humano', 'persona','human','clienta','reserva','reservado','agente','pague','pagar','bizum','transferencia','estuve','estube','ya alquile','alquilé'])
    .addAnswer('⚠️ En seguida te atiendo…',{delay: 2000,})

const flowGracias = addKeyword(['gracias'])
    .addAnswer(['Gracias a ti! 🙂'],{delay: 4000,})

const flowVideollamada = addKeyword(['📱 Por Videollamada','videollamada','alquilan para','alquilan en','alquiler en','envíos','envios','fuerda de madrid','fuera de barcelona','vidio llamada','vidio','vidiollamada','video llamada'])
    .addAnswer(['Ofrecemos un servicio online por *videollamada*, donde te enseñaremos nuestra colección de vestidos.'],{delay: 2000,})
    .addAnswer('¿Desde dónde nos escribes?',
    {
            buttons: [
                { body: 'España 🌹' },
                { body: 'Fuera de España 📦🌍' },
        ],
    }
    )

const flowCatalogo = addKeyword(['catálogo','catalogo','modelos de vestidos','estilo de vestidos'])
    .addAnswer(['Puedes ver nuestros muchos modelos en instagram o en nuestra web:'],{delay: 2000,})
    .addAnswer('📷 www.instagram.com/vestidos15/',{delay: 2000,})
    .addAnswer('🌐 www.vestidos15.es',{delay: 2000,})
    .addAnswer(['Pide tu cita *cuanto antes* para tener *más vestidos para escoger*:','www.citas.vestidos15.es'],{delay: 5000,})


const flowContiempo = addKeyword(['preparar con tiempo'])
    .addAnswer(['Es muy bueno que te quieras preparar con tiempo por dos razones:','1. aceptamos pagos a plazos','2. los vestidos en venta pueden tardar hasta 5 meses en llegar'],{delay: 2000,})

const flowSeguimiento = addKeyword(['seguimiento','numero de envio','tracking','seguir el envio'])
    .addAnswer(['⚠️ Lo reviso y te digo'],{delay: 2000,})

//const flowAudio = addKeyword({media:'type'}).addAnswer(
  //  'Lo siento, no puedo ver ni escuchar mensajes. Por favor, escribeme lo que necesitas',)

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([
    flowLugarmadrid,
    flowLugarbarcelona,
    flowLugares,
    flowFotos,
    flowMadrid,
    flowBarcelona,
    flowTiempo,
    flowUbicacion,
    flowEspana,
    flowFuera,
    flowNovias,
    flowPrecios,
    flowProbar,
    flowRecoger,
    flowServicios,
    flowAccesorios,
    flowAlquiler,
    flowEmbajadoras,
    flowModelaje,
    flowDesfile,
    flowPagoaplazos,
    flowDecoracion,
    flowRecuerdos,
    flowPrecioenvio,
    flowTallas,
    flowSaludo,
    flowHumano,
    flowGracias,
    flowVideollamada,
    flowSeguimiento,
    flowDamas,
    flowCatalogo,
    flowContiempo])
    const adapterProvider = createProvider(BaileysProvider)



    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
