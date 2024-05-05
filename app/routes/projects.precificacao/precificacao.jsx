import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/dados.png';
import sliceAppPlaceholder from '~/assets/dados.png';
import sliceApp from '~/assets/dados.png';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/predition.png';
import sliceBackgroundPlaceholder from '~/assets/predition.png';
import sliceBackground from '~/assets/predition.png';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/precificacao.png';
import sliceSidebarAnnotationsLarge from '~/assets/model1.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/model1.png';
import sliceSidebarAnnotations from '~/assets/model1.png';
import sliceSidebarLayersLarge from '~/assets/model2.png';
import sliceSidebarLayersPlaceholder from '~/assets/model2.png';
import sliceSidebarLayers from '~/assets/model2.png';
import sliceSlidesLarge from '~/assets/mvalues.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/mvalues.png';
import sliceSlidesLarge2 from '~/assets/cardi.png';
import sliceSlidesPlaceholder2 from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides2 from '~/assets/cardi.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Automatização da precificação de produtos';
const description =
  'Automatizando todo o trabalho de precificação e consulta de uma empresa de e-commerce com machine learning.';
const roles = ['Python', 'Data Science', 'CRISP-DM'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Precificacao = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection >
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Problemas a serem resolvidos</ProjectSectionHeading>
              <ProjectSectionText>
                Os maiores problemas encontrados eram os valores faltantes (normal em projetos reais)
                e a cardinalidade da coluna de título que não tinha uma padronização e isso dificultava 
                o trabalho de analizar bem os dados e fazer predições consistentes.              
                </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${sliceSlides2} 800w, ${sliceSlidesLarge2} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder2}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Resolvendo problemas</ProjectSectionHeading>
              <ProjectSectionText>
                Com base nos problemas estabelecidos, foram feitos tratamentos em todas as features
                necessárias, sendo de grande enriquecimento para entender insights e ajustar o modelo mais
                a frente.  
              </ProjectSectionText>
              <ProjectSectionText>
                Com muita exploração dos dados, preparação dos dados, foi feita modelagem de forma profissional,
                testando diversos modelos e esclhendo o que tinha as melhores métricas, e depois fazendo uma
                otimização de hiperparâmetros que fez com que o modelo respondesse o melhor possível aos objetivos
                do projeto.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Resultados do Projeto</ProjectSectionHeading>
              <ProjectSectionText>
                Com todo o apoio da empresa em reuniões, documentando tudo com base no CRISP-DM
                e organizando com base no SCRUM chegamos em 2 aplicações de predição que ajudaram 
                a empreza a ter um resultado de 91% de aumento no KPI de tempo, passando de 13,4h
                para 1h na precificação de produtos. Ademais, foi criado também uma aplicação para 
                calcular a depreciação do preço do produto com base nos dias de estoque, para ficar no ar
                foi utilizado o Streamlit.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
