# Koinos Developer Brand Kit

Welcome to the **Koinos Developer Brand Kit!** Koinos is the world's first free-to-use blockchain, designed to provide developers with a powerful and flexible platform for building decentralized applications. 

This brand kit includes all the resources you need to create consistent visuals that represent the Koinos brand. From logos, color palettes, typography, to various dynamic layout components.

The font sizes and colors are matched to the Koinos branding. For more information see `tailwind.config.css`


## Navbar and Dropdown Components
The navbar component can be customized to fit your website's needs, making it easy for users to navigate and access important information with regular links and dropdown components.
```
<Navbar>
	<Dropdown title='Dropdown'>
		<a>Link</a>
		<a>Link</a>
	</Dropdown>
	<a>Link</a>
	<a>Link</a>
</Navbar>
```

## Horizontal and Vertical Components

These are layout components that take a title prop and children, which are arranged horizontally/vertically.
```
<VerticalComponent  title='Koinos Vertical Component'>
	{children here are arranged vertically}
</VerticalComponent>

<HorizontalComponent  title='Koinos Horizontal Component'>
	{children here are arranged horizontally}
</HorizontalComponent>
```

## Buttons
Replace text with the desired button text and onClick with your function.
```
<OutlineButton  text='Koinos Button'  onClick={console.log('Clicked')}  />

<SolidButton  text='Solid Koinos Button'  onClick={console.log('Clicked')}  />
```
## Logos
	
There are two variations of the logo, `<KoinosLogo>` and `<KoinosLogoWhite>`, 6 preset sizes (xs, sm, md, lg, xl, xxl) and custom size className.

Using pre-sets:
```
<KoinosLogo  size='xs | sm | md | lg | xl | xxl'  />
```
Custom sizing:
```
<KoinosLogoWhite  className='w-full'/>
```
## Footer
Composable horizontal components with `<KoinosLogoWhite>` on the rightmost column.

## Links
Hyperlinks consistent with the Koinos branding. Customize href and text.

```
<Link  href="https://koinos.io/"  text='Koinos Link'></Link>
```

## Input
Custom input + submit component. Customize the text on the submit button, `buttonText`, the `onSubmit` function, and the `placeholder` for the input field.
```
<Input  buttonText='subscribe'  onSubmit={() =>  console.log('Submitted')}  placeholder='email address'  />
```


