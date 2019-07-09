# Prueba

## Ejercicio de base de datos

3. Describe la relación anterior usando una base de datos NoSQL 
  - (archivo schema/innohub-test.json es un json schema)

4. Explica que es DDL 
  - Data Definition Language, se utiliza para crear las estructuras de almacenamiento de bases de datos, en sql sentencias como CREATE TABLE, CREEATE VIEW, etc.

5. Explica que es DML 
  - Data Manipulation Language, se utiliza para introducir contenido a bases de datos para poder realizar posteriores consultas o modificaciones, en SQL sentencias como SELECT, INSERT, DELETE, UPDATE

6. Que es un ODM y que diferencias tiene de un ORM 
  - Un ODM (Object Document Mapper) relaciona un objeto a bases de datos no relacionales (tipo Mongo), como una plantilla, mongoose por ejemplo; mientras que un ORM (Object Relational Mapping) relaciona un objeto a bases de datos relacionales, objectionJS por ejemplo.

7. Describe funciones de agregación/agrupación 
  - JOIN, CONCAT_WS, GROUP

8. Que significa “High Partition Tolerance” en bases de datos SQL 
  - La tolerancia de partición significa que el clúster continúa funcionando incluso si hay una "partición" (interrupción de la comunicación) entre dos nodos (ambos nodos están activos, pero no pueden comunicarse).

9. Que significa “High Availability” en bases de datos NoSQL como MongoDB
  - Disponibilidad significa que el servicio o sistema está disponible cuando se solicita

## Preguntas 

1. ¿Cuál es la diferencia entre validación y verificación? 
  - La verificación es el proceso que consiste en confirmar que el producto cumple con lo descrito y con las especificaciones en términos de funcionalidad. La misma toma lugar durante los encuentros o reuniones del personal encargado de la revisión de dichos productos. En desarrollo veríficar que algo funcione correctamente es un proceso que deberí llevar el desarrollador, testers, etc.
  - La validación es un proceso que toma lugar en la etapa final de desarrollo de los productos,  n este proceso, el producto mismo es puesto a prueba por el equipo encargado de realizarlas. Con esto se asegura que el producto alcance el grado de funcionalidad deseado. Esta fase de pruebas podría estar dividida en varias más y al final se llega a la conclusión de si el producto puede lanzarse o no. Finalizando un módulo o proyecto se pasa al área pertinente o al cliente y este debe de dar su visto bueno del sistema/módulo teniendo de esta forma su validación.

2. ¿Cómo aseguras que un código tiene suficiente cobertura de pruebas? 
  - En lo personal creo que las pruebas exhaustivas se hacen cómo una ecuación diferencial "de izquierda a derecha", a lo que me refiero es introducir posibles valores por debajo de lo establecido y valores por encima de lo establecido, determinar puntos de "inflexón" y hacer pruebas en el punto, por debajo y por arriba nuevamente, esto pensando de una forma muy númerica pero hay que extrapolar esta idea a cualquier tipo de entrada sea númerica, cadena de texto, buffer, arreglo, etc.. cabe mencionar que, al final, en cada proyecto que he llevado en mi vida laboral, "te come el tiempo" y haces las pruebas que ves necesarias "a ojo de buen cubero", con el tiempo este mecanismo se afina, se mejora...

3. ¿Que es una prueba funcional? 
  - El servicio de pruebas funcionales se centra en comprobar que los sistemas desarrollados funcionan acorde a las especificaciones funcionales y requisitos del cliente. Este servicio ayuda a su organización a detectar los posibles defectos derivados de errores en la fase de programación. En otras palabras, que el programa no "truene" con las entradas esperadas.

4. ¿Cuál es la diferencia entre pruebas de integración y pruebas unitarias? 
  - Las pruebas unitarias corren sobre partes del código de forma independiente las pruebas de integración se hacen necesarias cuando queremos probar de una manera sistemica un proyecto como un todo.

5. ¿Cuál es la diferencia entre “Quality Assurance” y “Quality Control”? 
  - Q.A. Enfoque proactivo para prevenir defectos, se inplementa de manera transversal durante todo el proceso de elaboración de el producto. En el tiempo que llevo como desarrollador, QA se usa para probar el sistema de forma general (pruebas de integración finales) y mostrar al cliente/administrativos el avance del trabajo.
  - Q.C. Enfoque reactivo para corregir e identificar defectos en un producto terminado. En mi experiencia, este tipo de ambiente es fucionado con QA.

6. ¿Cuáles son las pruebas de benchmark? 
  - Un benchmark es una prueba de rendimiento, son pruebas diseñadas específicamente para medir la capacidad de generar resultados. Resultados objetivos, pues si todos los componentes se evalúan siempre de la misma manera. La mejor forma de compararlos entre sí.

7. Como borrar los últimos cambios sin commitear
  - `git reset --all` o tambien se puede hacer `git stash && git stash delete`

8. Menciona un patrón de diseño que hayas utilizado y describe cómo ayudó en el proyecto 
  - He utilizado, generadores yeoman, tanto para front como para backend, yo cree un generador de componentes llamado *generator-node-component* y se usa de la siguiente manera: 
  
  ```shell
    npm i yo generator-node-component -g
    mkdir my-component && cd my-component
    yo node-component
  ```

  los proyectos con .NET y visual studio tienen muy buenas *plantillas* para iniciar un proyecto con MVC o MVVC, tabajando con nodeJS y visual studio code (o peor aun con otros editores) es más libre el desarrollo, es muy importante definir un patrón de diseño, un standard.

9. ¿Cómo describes un antipatrón de diseño?
  - Un antipatrón de diseño es un patrón de diseño que invariablemente conduce a una mala solución para un problema. Basándome en mi experiencia un antipatrón muy común ocurre cuando hay rotación de personal y no se docuemnta de forma adecuada o simplemente a los nuevos no les interesa mucho dar continuidad al trabajo realizado anteriormente y hacen como ellos saben; el tiempo y la presión son causas de una mala construcción también, puede ocurrir que en principio se defina una buena estructura pero al ir avanzando y quedarse cortos de tiempo o viene un *OKR* donde no se le pregunta a nadie el tiempo real de implementación pues todo se termina haciendo al "ai'se va".