export default function About() {
    return (
      <>
        <div className="max-w-6xl text-gray-600 mx-auto bg-zinc-100 rounded-3xl my-3 grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-0 md:py-0 px-10 flex flex-col">
            <h1 className="font-bold mb-2 text-4xl text-gray-900">Conócenos</h1>
            <p>Con más de dos décadas de experiencia combinada en el sector inmobiliario de Baja, nuestro equipo reúne una amplia gama de habilidades. Hemos construido y comercializado 250 unidades en los últimos dos años. Nuestra experiencia abarca desde la gestión de ventas residenciales, adquisiciones y arrendamientos, hasta una variedad de competencias adicionales que incluyen construcción, procesos legales en bienes raíces, cumplimiento financiero para desarrolladores, conversión de condominios, prácticas ecológicamente responsables e inversión inmobiliaria, abarcando así todo el espectro de la industria.</p>
            <p>Nuestro mayor orgullo proviene del hecho de que más del 80% de nuestros clientes llegan a nosotros por recomendación, lo que demuestra la confianza que nuestros antiguos clientes tienen en nuestra capacidad para atender a sus contactos y seres queridos. Cada transacción es de suma importancia para nosotros, y la abordamos con una dedicación inquebrantable. Nuestro compromiso con brindar servicios personalizados, transparencia y una respuesta ágil permanece constante, independientemente del tamaño de la transacción. Esta devoción constante ha sido elogiada tanto por nuestros clientes como por nuestros colegas en la industria.</p>
            <p>Ya sea que estés dando tus primeros pasos en el mundo inmobiliario como comprador inicial, contemplando una inversión o buscando un nuevo hogar que se adapte perfectamente a tus necesidades, estamos entusiasmados por la oportunidad de colaborar contigo.</p>
          </div>
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-5 md:py-0 pb-5 px-10 flex flex-col">
            <img src="./images/i-loft-cabo/image1.jpeg" className="rounded-3xl" alt="Sobre nosotros"/>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto rounded-3xl mb-5 grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-5 md:py-0 pb-5 px-10 flex flex-col">
            <img src="./images/luxury-condos/image1.jpeg" className="rounded-3xl" alt="Visión"/>
          </div>
          <div className="md:ml-16 max-w-70 md:mt-20 mb-0 mt-16 mx-auto md:px-0 md:py-0 text-gray-600 px-10 flex flex-col">
            <h1 className="font-bold text-4xl text-gray-900">Nuestros Valores</h1>
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Liderazgo</h2>
            <p className="my-4">Nos esforzamos por ser una empresa de primer nivel, impulsada por una fuerte pasión por la excelencia y un compromiso inquebrantable con el desarrollo de nuestros clientes, inversionistas y colaboradores.</p>
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Equipo</h2>
            <p className="my-4">A través de la integración de nuestro capital intelectual, operativo y administrativo, junto con todos nuestros proveedores, aprovechamos una fuerza colectiva para lograr y mantener la satisfacción del cliente a nivel local.</p>
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Honestidad</h2>
            <p className="my-4">Ofrecemos una colaboración 100% transparente, genuina y confiable para nuestros clientes.</p>
          </div>
        </div>
      </>
    );
  }
  