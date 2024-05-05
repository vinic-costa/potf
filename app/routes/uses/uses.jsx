import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/backgroundv.gif';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';
import { Col, Row } from "react-bootstrap";
import {
  ProjectImage,
} from '~/layouts/project';
import sliceAppLarge from '~/assets/techuse.png';
import sliceAppPlaceholder from '~/assets/techuse.png';
import sliceApp from '~/assets/techuse.png';
import { media } from '~/utils/style';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Sobre mim"
          description="Olá, sou Vinicius Costa e essa página é para você conhecer as tecnologias e ferramentas que eu trabalho ou já trabalhei."
          
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="g">
              <ProjectSectionHeading>Tecnologias e ferramentas</ProjectSectionHeading>
              <ProjectSectionText as="div">
            <ProjectImage
              className={styles.imagem}
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
                <List>
                  <ListItem>
                    Eu utilizo, geralmente, para escrever scrips o VScode, o Jupyter e o Colab,
                    Como trabalho com dados, tenho muito contato com linguagens como Python e R
                    para fazer todas as etapas dos projetos de dados. 
                  </ListItem>
                  <ListItem>
                    Para melhorar minhas habilidades em Data vizualization tenho amplo conhecimento
                    em ferramentas como o Excel, PowerBI, Metabase e tenho conhecimentos em linguagens de marcação
                    e de estilos, como HTML e CSS. Ademais tenho habilidades de Web developer com conhecimentos em
                    Nodejs, Express, Reactjs. Mas sempre em busca de novos conhecimentos se tiver alguma dúvida 
                    pode <Link href="/contact">entrar em contato</Link>.
                  </ListItem>
                  <ListItem>
                    Em relação a bancos de dados que eu trabalho, tenho mais familiaridade com MySQL e Mongodb
                    logo, tenho conhecimento em bando SQL e NoSQL.
                  </ListItem>
                  <ListItem>
                    Estudei um pouco também sobre computação gráfica onde tive contato com a biblioteca Threejs e a ferramenta Blender.
                  </ListItem>
                  <ListItem>
                    Sobre o meu conhecimento de metodologias ágeis, tenho conhecimento teórico em Lean-six-sigma e conhecimento
                    prático em SCRUM.
                  </ListItem>
                  <ListItem>
                    Atualmente estou aprendendo sobre Deep Learning e tendo mais contato com bibliotecas como OpenCV e TensorFlow.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="g">
              <ProjectSectionHeading>Uso prático</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Meu uso em Linguagens como Python e R vai desde análises exploratórias e predições, até
                    projetos de visão computacional trabalhando com imagens e áudios. Como exemplo temos a pesquisa
                    de identificação de cistos em imagens de radiografia panorâmica e o reconhecimento de espécies de
                    insetos pelo som do bater das asas, disponíveis no meu <Link href="https://github.com/vinic-costa">Github</Link> e na parte de artigos
                    desse site.
                  </ListItem>
                  <ListItem>
                    O uso das minhas habilidades de data vizualization foram importantes, tanto no projeto que 
                    fiz para a empresa Tag2u de predição de precificação, como também em projetos para a escola DNC
                    que foi onde fiz a formação de dados.
                  </ListItem>
                  <ListItem>
                    Meus conhecimentos em computação gráfica podem ser observados no link do Notion sobre 
                    o tema <Link href="https://www.notion.so/24694bb89840456d9d7738f670c1d256?v=214d6d8d957d4e379763a947974d4b59&pvs=4">Notion - CG</Link>. 
                  </ListItem>
                  <ListItem>
                    Sobre a utilização dos bancos de dados, tenho conheciennto tanto na parte de análise de dados colhendo de diversas fontes,
                    como integração de bancos de dados em aplicações Web, como fiz com MongoDB o projeto sobre <Link href="https://webchat.adaptable.app/">WebChat</Link>.
                  </ListItem>
                  <ListItem>
                    Minhas habilidades práticas em SCRUM foram de grande importancia no projeto da Tag2u, pois fazer as tasks nas springs
                    e a metodologia de reuniões diárias aumentou o desempenho e os resultados finais.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectHeader
          title="Feliz em ver você aqui"
          description="Obrigado por ler e me conhecer melhor, estou aberto a oportunidades e conhecimentos, então não deixe
          de entrar em contato !!" 
          
        />
      </ProjectContainer>
      <Footer />
    </>
  );
};
