declare module '@/components/ui/Button' {
  import { ComponentPropsWithoutRef, ElementType } from 'react';
  export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
  }
  export function Button(props: ButtonProps): JSX.Element;
}

declare module '@/components/ui/card' {
  import { ComponentPropsWithoutRef } from 'react';
  export interface CardProps extends ComponentPropsWithoutRef<'div'> {}
  export interface CardHeaderProps extends ComponentPropsWithoutRef<'div'> {}
  export interface CardTitleProps extends ComponentPropsWithoutRef<'h3'> {}
  export interface CardDescriptionProps extends ComponentPropsWithoutRef<'p'> {}
  export interface CardContentProps extends ComponentPropsWithoutRef<'div'> {}
  
  export function Card(props: CardProps): JSX.Element;
  export function CardHeader(props: CardHeaderProps): JSX.Element;
  export function CardTitle(props: CardTitleProps): JSX.Element;
  export function CardDescription(props: CardDescriptionProps): JSX.Element;
  export function CardContent(props: CardContentProps): JSX.Element;
}

declare module '@/components/ui/input' {
  import { ComponentPropsWithoutRef } from 'react';
  export interface InputProps extends ComponentPropsWithoutRef<'input'> {}
  export function Input(props: InputProps): JSX.Element;
}

declare module '@/components/ui/alert' {
  import { ComponentPropsWithoutRef } from 'react';
  export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
    variant?: 'default' | 'destructive';
  }
  export interface AlertTitleProps extends ComponentPropsWithoutRef<'h5'> {}
  export interface AlertDescriptionProps extends ComponentPropsWithoutRef<'div'> {}
  
  export function Alert(props: AlertProps): JSX.Element;
  export function AlertTitle(props: AlertTitleProps): JSX.Element;
  export function AlertDescription(props: AlertDescriptionProps): JSX.Element;
}

declare module '@/components/ui/number-display' {
  import { ComponentPropsWithoutRef } from 'react';
  export interface NumberDisplayProps extends ComponentPropsWithoutRef<'div'> {
    number: number | null;
    label?: string;
    isPrime: boolean | null;
    isLoading?: boolean;
  }
  export function NumberDisplay(props: NumberDisplayProps): JSX.Element;
}

declare module '@/components/ui/stats-card' {
  import { ComponentPropsWithoutRef } from 'react';
  export interface StatsCardProps extends ComponentPropsWithoutRef<'div'> {
    title: string;
    value: string | number;
    description?: string;
  }
  export function StatsCard(props: StatsCardProps): JSX.Element;
}

