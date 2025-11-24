import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { ShieldCheckered, Stack, Users } from '@phosphor-icons/react';

type FeatureItem = {
  title: string;
  Svg: React.ElementType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create Compliant Sites',
    Svg: ShieldCheckered,
    description: (
      <>
       Use this handbook to ensure your sites meet accessibility laws and standards
      </>
    ),
  },
  {
    title: 'Not Just a Checkbox',
    Svg: Stack,
    description: (
      <>
       Accessibility isn’t an add-on. It’s baked into every step, from planning to launch. If your product isn’t usable for everyone, it isn’t finished <strong>
       period</strong>.
      </>
    ),
  },
  {
    title: 'People First',
    Svg: Users,
    description: (
      <>
        When you build with accessibility in mind, you create real value for 
        everyone; your users, your partners, and your business.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} size={64} weight="duotone" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
