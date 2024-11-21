import React, { useRef } from 'react';
import ScrollTo from '../../components/ui/scroll-to/ScrollTo';
import './Home.css';
import logo from './logo.svg';

const Home: React.FC = () => {
  const introRef = useRef(null);
  const goFurtherRef = useRef(null);

  return (
    <div>
      <div id="intro" className="center" ref={introRef}>
        <h1>My super brand!</h1>
        <img src={logo} alt="my logo" className="full-page-logo" />
        <br />
        <button>Buy products</button>
        <br />
        <ScrollTo targetRef={goFurtherRef} className="link">
          Continue
        </ScrollTo>
      </div>
      <div id="go-further" className="container center" ref={goFurtherRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          aliquid id dignissimos iure quos illo ea porro, optio non perferendis
          dolore excepturi molestiae doloribus itaque quisquam, possimus ipsa at
          quasi illum quidem natus ex. Repudiandae molestiae itaque, dolorem
          nisi temporibus ea sapiente alias? Omnis, impedit. Quae dignissimos
          quod optio recusandae voluptatibus tenetur! Modi dolorem perspiciatis
          odio tempora rem nisi consectetur, earum praesentium autem voluptatum
          expedita doloremque inventore dolore ab, quisquam, voluptates unde
          alias exercitationem blanditiis. Quidem dicta alias, qui cupiditate
          ipsa illo deserunt magni molestias numquam eveniet, assumenda maxime
          est veniam labore temporibus minima officiis facilis cum voluptatum
          rerum eum reiciendis. Voluptatem voluptates soluta in excepturi, quasi
          distinctio tenetur officia, nam doloribus obcaecati reiciendis
          nesciunt odit pariatur voluptas corporis ipsam enim illo. Voluptas
          adipisci fugiat ducimus optio sint. Dignissimos velit pariatur, neque
          atque illo nemo exercitationem magnam laudantium? Mollitia
          voluptatibus quaerat nostrum ipsa facere excepturi dolorem blanditiis
          eveniet amet rem expedita totam, facilis et explicabo similique modi
          fuga repellendus accusamus adipisci temporibus architecto laboriosam
          maiores sint fugit. Harum illo vero dolores dolore distinctio
          perspiciatis aliquam repellat! Cum soluta excepturi omnis commodi
          blanditiis libero numquam deserunt ut beatae dolores iusto illo
          temporibus ipsum, explicabo similique quasi repellendus consequatur
          cumque modi eius!
        </p>
        <p>
          Neque expedita dignissimos nam amet obcaecati natus, harum fuga
          aliquam? Eligendi incidunt ab ipsum nisi repudiandae tempore sunt
          harum nostrum debitis a commodi, tempora tenetur id, ullam velit. Nam
          harum at aperiam et natus dolorum suscipit optio provident eos,
          doloribus ex nobis sunt fuga officiis voluptatum. Sapiente ducimus
          eveniet et impedit eaque debitis dicta saepe voluptatum soluta
          adipisci rem, quod quaerat ea aliquam iure eum dolores voluptate velit
          veniam corporis officia. Assumenda aliquam doloribus architecto
          inventore temporibus! Odit ex reprehenderit possimus ipsa quis ab
          assumenda consequuntur esse recusandae. Rerum quasi incidunt, numquam
          veniam recusandae harum, porro eaque, a labore est velit dolore
          ratione. Atque, eligendi perspiciatis! Quos, eius voluptates qui
          sapiente doloribus nostrum enim harum accusantium voluptatum animi
          magnam molestias ab. Delectus veritatis eveniet aliquam cum, commodi
          cumque iste consectetur tempore odio ipsa porro hic excepturi expedita
          itaque, sapiente enim mollitia fugiat praesentium ipsam sed. Non porro
          nulla voluptate facere incidunt delectus atque voluptatem, iure
          aperiam fuga ipsam, tenetur laudantium pariatur! Modi, corrupti. Nulla
          saepe iste voluptates blanditiis in incidunt facere reprehenderit non,
          similique fuga odio voluptate beatae maiores adipisci nemo natus
          nostrum architecto autem exercitationem suscipit animi neque ea modi!
          Ratione praesentium nulla rerum recusandae eum, doloribus dolorem aut.
        </p>
        <p>
          Minima, a laboriosam? Reprehenderit quod blanditiis, repudiandae
          consequuntur expedita debitis eos optio consectetur rerum soluta harum
          tempore vel doloremque modi omnis impedit labore ipsam tenetur
          repellat, eligendi magnam at nemo a fugiat. Molestias repellendus
          laborum asperiores est non repellat voluptates nobis consequuntur
          pariatur nisi assumenda libero fugit ipsum, quia blanditiis inventore
          culpa sunt. Rerum perferendis alias iure nulla doloribus, earum
          delectus molestiae perspiciatis omnis repellat quibusdam. Maxime
          pariatur libero ut, dolorem quisquam nam alias quam et exercitationem
          doloribus placeat deleniti nemo unde ipsum culpa, optio officiis amet
          fugit atque autem. Eligendi ullam exercitationem nesciunt iure illum,
          cupiditate ipsam veritatis voluptas, impedit reiciendis repellendus,
          error ipsa magnam alias quas mollitia consequuntur voluptatibus at!
          Impedit aperiam odio voluptas est natus architecto atque porro odit
          quasi hic corporis cum doloremque aspernatur dolor eveniet assumenda
          quas iure, unde aliquid error, animi a optio quae. Excepturi, sit
          quos! Dignissimos dolorem libero, ducimus nostrum esse reprehenderit,
          eius fugit laudantium nobis delectus quia cum fugiat ipsam iste quasi
          quis asperiores sint neque obcaecati ipsum! Debitis iste quidem
          consequuntur quisquam cumque laudantium doloribus mollitia! Quia porro
          eius, in maxime sunt nobis, vitae incidunt error officiis veniam ipsam
          atque dolor consequatur ducimus sint laudantium quibusdam. Est non
          voluptatem eum.
        </p>
        <p>
          Nemo aspernatur ipsam ipsum et. Officia rem saepe autem perspiciatis
          repellendus nam molestias minus earum provident! Numquam omnis facere
          harum ducimus eveniet veritatis aspernatur? At voluptate laboriosam
          quibusdam, eos illo temporibus maiores dignissimos quaerat voluptatem
          in iure voluptas repellat aut a sit neque ex inventore consequuntur
          est impedit perferendis quae eveniet consectetur! Quis, veniam. Eaque
          veritatis, porro iure neque debitis iste beatae obcaecati perferendis
          recusandae accusantium cupiditate asperiores, explicabo dolorem
          architecto natus distinctio tempore. Fugit excepturi ipsa totam itaque
          quasi dolor eaque maiores placeat, repellat enim a sequi,
          exercitationem doloribus impedit numquam. Ad tempora velit
          consequuntur dolorum aspernatur, aliquam corporis, quam blanditiis, in
          alias quis inventore quasi ducimus! Quo tenetur tempore unde ea
          similique magnam consectetur facere minima odio nam? Minima obcaecati
          dolor laudantium minus. Doloribus ipsam repudiandae soluta adipisci?
          Ratione adipisci eum dicta dolore corporis autem dolor. Animi
          doloribus eum quo cumque soluta ab consequatur quidem illum, suscipit
          vitae. Eum fuga natus at est? Tenetur possimus laudantium cum iste
          esse totam itaque, quas voluptate non. Voluptatem cumque enim eligendi
          nam facilis et beatae iusto fuga consequuntur natus a voluptatum
          quidem harum soluta aspernatur numquam qui, voluptate quibusdam
          deleniti, repellat explicabo? Dicta id quis nobis dolores culpa,
          corrupti quod sit!
        </p>
      </div>
    </div>
  );
};

export default Home;
