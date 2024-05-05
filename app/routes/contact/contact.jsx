import { Section } from '~/components/section';
import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useActionData, useNavigation } from '@remix-run/react';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

export const Contact = () => {
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  // URL do seu formulário do Google Forms
  const googleFormsURL = "https://forms.gle/48BQpwiNGure8mDRA";

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status }) => (
          <div className='form'>
            <h1 className={styles.title}>
              <DecoderText text="Entre em contato" start={status !== 'exited'} delay={300} />
            </h1>
            <Divider className={styles.divider} />
            <iframe 
              src={googleFormsURL} 
              width="700px" 
              height="600px" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Contact Form"
            >
              Carregando…
            </iframe>
            <Button
              className={styles.button}
              data-sending={sending}
              style={getDelay(tokens.base.durationM)}
              disabled={sending}
              loading={sending}
              loadingText="Enviando..."
              type="submit"
            >
              Enviar mensagem
            </Button>
          </div>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status }) => (
          <div className={styles.complete} aria-live="polite">
            <h3 className={styles.completeTitle} data-status={status}>
              Mensagem enviada
            </h3>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Responderei em alguns dias, aguarde.
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
            >
              Voltar para a página inicial
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
