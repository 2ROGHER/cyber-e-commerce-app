# Client

# Important notes
| Carpeta       | Propósito                                                           | Contenido típico                                              | Características                                                                   |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `ui/`         | Componentes **reutilizables pero específicos** del dominio (`home`) | Botones, tarjetas, listas visuales que solo se usan en `home` | Componentes **puros/presentacionales**, enfocados en **cómo se ve**, no en lógica |
| `components/` | Componentes **más inteligentes o containers** del dominio `home`    | Páginas, secciones, contenedores que usan servicios o NgRx    | Pueden manejar **estado, lógica, servicios, inputs/outputs**                      |



| Carpeta       | Propósito principal                                                            | Nivel de abstracción                  | Reutilización                   | Contiene lógica de negocio | Ejemplos                                                                |
| ------------- | ------------------------------------------------------------------------------ | ------------------------------------- | ------------------------------- | -------------------------- | ----------------------------------------------------------------------- |
| `components/` | Componentes **inteligentes** (Smart) del dominio                               | Alto (manejan lógica del caso de uso) | Limitada al dominio             | ✅ Sí                       | `home-page.component.ts`, `checkout-container.component.ts`             |
| `ui/`         | Componentes **presentacionales** (Dumb) del dominio                            | Bajo (solo vista, inputs/outputs)     | Limitada al dominio             | ❌ No                       | `home-banner.component.ts`, `product-card.component.ts`                 |
| `widgets/`    | Mini componentes **autónomos y reutilizables**, con algo de lógica encapsulada | Medio                                 | Reutilizable en varios features | 🚫 Mínima o autocontenida  | `date-picker`, `carousel`, `rating-star`, `modal`, `notification-toast` |


### ¿Qué es un widget en este contexto?
Un widget es un componente auto-contenido, que puede:

Tener interactividad simple (ej. click, toggle, expand),

Tener una vista rica o compleja, con su propio SCSS y Input/Output,

Ser reutilizable en varios features, como si fuera una mini "librería" interna.

A diferencia de un ui/ que es solo visual y específico del feature, un widget está entre un shared component y un presentational component.

### Donde ubicarlos 
```bash 
shared/
└── widgets/
    ├── date-picker/
    ├── star-rating/
    └── image-carousel/

```
## Examples 
```js
// Uso de para UI (Presentation/Dumb)
@Component({
  selector: 'app-feature-card',
  template: `<div>{{ title }}</div>`
})
export class FeatureCardComponent {
  @Input() title!: string;
}

@Component({
  selector: 'app-promo-carousel',
  template: `<div (click)="next()">...</div>`
})
export class PromoCarouselComponent {
  @Input() slides!: Slide[];
  current = 0;
  next() { this.current = (this.current + 1) % this.slides.length; }
}

@Component({
  selector: 'app-home-page',
  template: `
    <app-promo-carousel></app-promo-carousel>
    <app-product-card *ngFor="let p of products" [data]="p" />
  `
})
export class HomePageComponent {
  products = this.productService.getAll();
}



// Uso para Components (Smart/Logic)
@Component({
  selector: 'app-home-page',
  template: `
    <app-feature-card
      *ngFor="let card of cards"
      [title]="card.title">
    </app-feature-card>
  `
})
export class HomePageComponent {
  cards = this.homeService.getCards(); // accede a lógica de negocio
}

// Uso de Widgets (intermedio smart/dumb)

@Component({
  selector: 'app-promo-carousel',
  template: `<div (click)="next()">...</div>`
})
export class PromoCarouselComponent {
  @Input() slides!: Slide[];
  current = 0;
  next() { this.current = (this.current + 1) % this.slides.length; }
}

```
## Resumen

| Carpeta       | ¿Reutilizable? | ¿Lógica interna? | ¿Dónde usar?                                      |
| ------------- | -------------- | ---------------- | ------------------------------------------------- |
| `components/` | ❌ No           | ✅ Alta           | Dentro del dominio                                |
| `ui/`         | ❌ No           | ❌ No             | Solo presentación dentro del dominio              |
| `widgets/`    | ✅ Sí           | ✅ Baja/Media     | Dentro de shared o del feature si no se reutiliza |
