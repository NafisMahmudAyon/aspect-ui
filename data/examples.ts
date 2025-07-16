
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
import DefaultCarousel from "@/app/examples/data/components/Carousel/DefaultCarousel";
import CustomControlsCarousel from "@/app/examples/data/components/Carousel/customControlsCarousel";
import AutoplayCarousel from "@/app/examples/data/components/Carousel/AutoPlayCarousel";
import DefaultCheckbox from "@/app/examples/data/components/Checkbox/DefaultCheckbox";
import CheckboxWithLabel from "@/app/examples/data/components/Checkbox/CheckboxWithLabel";
import DisabledCheckbox from "@/app/examples/data/components/Checkbox/DisabledCheckbox";
import DefaultBadge from "@/app/examples/data/components/Badge/DefaultBadge";
import OutlineBadge from "@/app/examples/data/components/Badge/OutlineBadge";
import GhostBadge from "@/app/examples/data/components/Badge/GhostBadge";
import DefaultCircularProgressBar from "@/app/examples/data/components/CircularProgressBar/DefaultCircularProgressBar";
import OnVisibleCircularProgressBar from "@/app/examples/data/components/CircularProgressBar/OnVissibleCircularProgress";
import DefaultDatePicker from "@/app/examples/data/components/DatePicker/DefaultDatePicker";
import DefaultDivider from "@/app/examples/data/components/Divider/DefaultDivider";
type ComponentCategory =
  | 'button'
  | 'card'
  | 'carousel'
  | 'avatar'
  | 'alert'
  | 'accordion'
  | 'breadcrumb'
  | 'badge'
  | 'back-to-top'
  | 'checkbox'
  | 'circular-progress'
  | 'date-picker'
  | 'divider'
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
  'badge': {
    'default-badge': DefaultBadge,
    'outline-badge': OutlineBadge,
    'ghost-badge': GhostBadge
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
  },
  'carousel': {
    'default-carousel': DefaultCarousel,
    'custom-carousel-control': CustomControlsCarousel,
    'autoplay-carousel': AutoplayCarousel
  },
  'checkbox': {
    'default-checkbox': DefaultCheckbox,
    'checkbox-with-label': CheckboxWithLabel,
    'disabled-checkbox': DisabledCheckbox
  },
  'circular-progress': {
    'default-circular-progress': DefaultCircularProgressBar,
    'on-visible-circular-progress': OnVisibleCircularProgressBar
  },
  'date-picker': {
    'default-date-picker': DefaultDatePicker
  },
  'divider': {
    'default-divider': DefaultDivider
  }
}

export default exampleComponentMap