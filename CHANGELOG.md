# Release Notes

## Current Release

- [ ] Fix close icon/button in corner dialogs.
- [ ] `TextArea` is problematic when used as a controlled input.

### v0.9.16

- [x] Ability to apply `flex` props form `FormGroup` component.

### v0.9.15

- [x] Remove icons completely to reduce bundle size.
- [x] Make `MenuItem`'s background transparent.
- [x] Remove `Stepper` component.

### v0.9.14

- [x] Update react, react-dom, styled-components, styled-system and polished packages.

### v0.9.13

- [x] Make `SideSheet` component responsive.
- [x] Make `Dialog` component responsive.
- [x] Remove `Toaster` component alltogether.
- [x] Add `TableResponsive` component to provide responsive table ability.
- [x] Fix `shouldCloseOnEscapePress` property for `Overlay` component.
- [x] Add `shouldCloseonEscapePress` prop to `SideSheet` component.
- [x] Add `typography` props to `Heading` component.
- [x] Add `typography` and `space` props to `FormGroup` component.

### v0.9.12

- [x] Remove width from image in `BlankSlate` component.
- [x] Need to add a `ButtonGroup` component.

### v0.9.11

- [x] Add `position` option to `DatePicker` component.

### v0.9.10

- [x] Fix `BlankSlate` component image size.

### v0.9.9

- [x] Refactor `NumberInput` component to use `TextInput` as customInput. This solves loads of problems about masked and money inputs we've been experiencing in fe app.

### v0.9.7

- [x] Fix prop type error and make display block for `DatePicker` component.

### v0.9.6

- [x] Add forgotten componentDidUpdate method for `Stepper` component.

### v0.9.5

- [x] Reduce the spacing and size of `Switch` component.
- [x] Add `Stepper` and `Step` components with dynamic index and state management.

### v0.9.4

- [x] Properly create `NumberInput` component.
- [x] Inherit `FormGroup` from `Box` component so we can use `flex` property in flexbox form rows.

### v0.9.3

- [x] Clear warnings for `ButtonIcon` and `ButtonLink`, by creating the component properly.
- [x] Clear warnings for `SelectInput`, by creating the component properly.
- [x] Remove `ListView` and sub components.

### v0.9.2

- [x] Clear warnings for `TextInput`, by creating the component properly.
- [x] Clear warnings for `Button`, by creating the component properly.

### v0.9.1

- [x] Remove `styled-components`, `styled-system`, `polished` from peer dependencies.
- [x] Update `styled-components`, `styled-system`, `polished` versions.
- [x] Rename ui kit to Sirius!
- [x] Don't export everything on index.

### v0.9.0

- [x] Move package to Github package registry from npm.

### v0.8.16

- [x] Fix spacing for `<FormGroup>` and `<FormLabel>` components.

### v0.8.15

- [x] `Dropdown` component now closes when escape key is pressed.
- [x] `TextInput` takes `hasError` property.
- [x] `ListItem` takes typography values now.

### v0.8.14

- [x] Fix `TextArea` component line height for autoResize functionality.
- [x] `TextInput`, `AutoresizeInput` and `DatePicker` gets typography props now.
- [x] `NumberInput` component can be transparent and be used with `InputGroup` component now.
- [x] Add `AutoresizeNumberInput` component for resizable money/number input functionality.
- [x] `Combobox` component now takes transparent option.
- [x] Add size option to `Menu` component.
- [x] Add minimal variant to `TextInput` component.
- [x] Change `ButtonLink` component to be more usable.
- [x] You can apply maxWidth to `AutosizeInput` now.
- [x] `InputGroupText` component now gets size option.
- [x] `Dropdown` component now gets placement option.

### v0.8.13

- [x] Update styled-system version to `5.0.12` from `3.2.1`.
- [x] Added `autoResize` and `transparent` options to `TextArea` component.
- [x] `Badge` component now gets `interval` as prop.
- [x] Fix `TabGroup` content spacing.
- [x] `Tab` component can have `label` prop as node.
- [x] `NumberInput` has monospace font now.
- [x] Add new `layout` property to `Box` component.
- [x] Add `Popover` component. Missing documentation though.
- [x] Add `AutoresizeInput` component.
- [x] `DatePicker` improvements.

### v0.8.12

- [x] Add flex: 1 to `ListViewItem` body element.

### v0.8.11

- [x] Add outline option to `Button` component.
- [x] `Card` component visual and functional improvements.
- [x] Added variant option to `Popconfirm` component.
- [x] Added missing `IconWarning` component.
- [x] Acceptable functionality for clickable `ListViewItem` component.
- [x] Exclude actions to trigger click event for `ListViewItem`.

### v0.8.10

- [x] Add line-height to `MenuItem` component.
- [x] Ability to render `ListViewItem` component as anchor tag.
- [x] Change default numeric font to monospace 'IBM Plex Mono'
- [x] Fix `BlankSlate` component's spacing and positioning issues.

### v0.8.9

- [x] Fix `PropTypes.oneOf` bug for `InputGroupText` component.

### v0.8.8

- [x] Inherit `Media` component from `Box`
- [x] Toggle visibility of `Dropdown` component's content window rather than only opening.
- [x] Move elevation styles to constants
- [x] `MenuItem` component takes `variant` property now.
- [x] Reduce `MenuItem` spacing.
- [x] Ability to apply `as` prop to `MenuItem` component.
- [x] Reduce spacing for description list items.
- [x] Rename `Select` component to `Combobox`.
- [x] Make `ListViewItem` component clickable.
- [x] Add `InputGroup` and `InputGroupText` components.
