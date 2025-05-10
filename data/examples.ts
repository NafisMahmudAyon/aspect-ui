
import { MultipleOpenAccordion } from "@/app/examples/data/components/Accordion/MultipleOpenAccordion";
import { CustomIconAccordion } from "@/app/examples/data/components/Accordion/CustomIconAccordion";
import { DefaultAccordion } from "@/app/examples/data/components/Accordion/DefaultAccordion";
import type { FC } from 'react'
import { DefaultAlert } from "@/app/examples/data/components/Alert/DefaultAlert";
import { MultipleTypeAlert } from "@/app/examples/data/components/Alert/MultipleTypeAlert";
import { DefaultAvatar } from "@/app/examples/data/components/Avatar/DefaultAvatar";
import { AvatarBadgeExample } from "@/app/examples/data/components/Avatar/AvatarBadgeExample";
import { AvatarGroupExample } from "@/app/examples/data/components/Avatar/AvatarGroupExample";
import DefaultBackToTopExample from "@/app/examples/data/components/BackToTop/DefaultBackToTop";
import { DefaultBreadcrumb } from "@/app/examples/data/components/Breadcrumb/DefaultBreadcrumb";
import CustomSeparator from "@/app/examples/data/components/Breadcrumb/CustomSeparator";
import DefaultButton from "@/app/examples/data/components/Button/DefaultButton";
import DisabledButtons from "@/app/examples/data/components/Button/DisabledButtons";
import IconButtons from "@/app/examples/data/components/Button/IconButtons";
import LoadingButtons from "@/app/examples/data/components/Button/LoadingButtons";
import SizeButtons from "@/app/examples/data/components/Button/SizeButtons";
import VariantButtons from "@/app/examples/data/components/Button/VariantButtons";
import DefaultCard from "@/app/examples/data/components/Card/DefaultCard";
import SimpleCard from "@/app/examples/data/components/Card/SimpleCard";
import WithHeaderFooterCard from "@/app/examples/data/components/Card/WithHeaderFooterCard";
import InteractiveCard from "@/app/examples/data/components/Card/InteractiveCard";

type ComponentCategory =
  | 'button'
  | 'card'
  | 'avatar'
  | 'alert'
  | 'accordion'
  | 'breadcrumb'
  | 'back-to-top'
type ExampleKey = string

export type ExampleComponentMap = {
  [category in ComponentCategory]?: {
    [example in ExampleKey]: FC<any>
  }
}


const exampleComponentMap: ExampleComponentMap = {
  'accordion': {
    'custom-icon-accordion': CustomIconAccordion,
    'default-accordion': DefaultAccordion,
    'multiple-open-accordion': MultipleOpenAccordion
  },
  'alert': {
    'default-alert': DefaultAlert,
    'multiple-type-alert': MultipleTypeAlert
  },
  'avatar': {
    'default-avatar': DefaultAvatar,
    'avatar-badge': AvatarBadgeExample,
    'avatar-group': AvatarGroupExample
  },
  'back-to-top': {
    'default-back-to-top': DefaultBackToTopExample
  },
  'breadcrumb': {
    'default-breadcrumb': DefaultBreadcrumb,
    'custom-separator-breadcrumb': CustomSeparator
  },
  'button': {
    'default-button': DefaultButton,
    'disabled-buttons': DisabledButtons,
    'icon-buttons': IconButtons,
    'loading-buttons': LoadingButtons,
    'size-buttons': SizeButtons,
    'variant-buttons': VariantButtons
  },
  'card': {
    'default-card': DefaultCard,
    'simple-card': SimpleCard,
    'with-header-footer-card': WithHeaderFooterCard,
    'interactive-card': InteractiveCard
  } 
}

export default exampleComponentMap