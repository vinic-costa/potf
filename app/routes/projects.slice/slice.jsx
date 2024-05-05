import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/BD-Cistos.png';
import sliceAppPlaceholder from '~/assets/BD-Cistos.png';
import sliceApp from '~/assets/BD-Cistos.png';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/Cistobg.png';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/Cistobg.png';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/result.png';
import sliceSidebarAnnotationsLarge from '~/assets/ciston.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/ciston.png';
import sliceSidebarAnnotations from '~/assets/ciston.png';
import sliceSidebarLayersLarge from '~/assets/ciston2.png';
import sliceSidebarLayersPlaceholder from '~/assets/ciston2.png';
import sliceSidebarLayers from '~/assets/ciston2.png';
import sliceSlidesLarge from '~/assets/aumento-de-dados.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/aumento-de-dados.png';
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

const title = 'Identificação de Cistos odontologicos';
const description =
  'Reconhecimento de cistos odontologicos em imagens de radiografia panorâmica com Deep Learning.';
const roles = ['Python', 'Deep Learning', 'Computer Vision'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
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
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Problema a ser resolvido</ProjectSectionHeading>
              <ProjectSectionText>
                Este se trata de um problema de visão computacional que tem como foco identificar
                áreas cisticas por meio do aprendizado profundo, um dos problemas era o tamanho
                do dataset, que apesar de ter 682 amostras, para identificar um cisto que é algo complexo se
                tornava difícil, muito por conta dos diferentes tipos de cistos de existem.  
              </ProjectSectionText>
              <ProjectSectionText>
                Como mostrado na imagem do dataset acima, temos três pastas chamadas: CREATML (JSON),
                PascalVOC (XML), YOLO (TXT) com as coordenadas dos cistos, que se mostrarmos utilizando as
                bibliotecas OpenCV e Matplotlib temos imagens como as ao lado.
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
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Aumentando a quantidade de dados</ProjectSectionHeading>
              <ProjectSectionText>
                Como citado anteriormente, um problema grande era a falta de dados para que
                o modelo aprendesse melhor o que, de fato, era um cisto odontológico, para isso
                foram implementadas ações para aumentar os dados, aplicando transformações de brilho,
                rotação, etc. Dessa forma aumenta a diversidade de dados e melhora a predição do modelo.              
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
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Resultados do Projeto</ProjectSectionHeading>
              <ProjectSectionText>
                Os resultadosse deram pelo uso da arquitetura U-Net com adição de blocos residuais onde no final
                a predição era uma máscara binária mostrando onde está o cisto.
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
