# Components

This documentation covers the components used in this project. Most of the components are straightforward to understand. However, I would like to mention one important point before you contribute to this repository.

## CustomButton

This component is essentially an encapsulation of the antd Button with some additional variants that antd does not provide but are required according to our Figma design. The usage remains the same.
Note: Currently, an additional type (secondary) has been added alongside antd's default types. Please add button variants in a similar manner.

```tsx
/**
 * background: '#f0f2f5'
 */
import React from "react";
import { CustomButton } from "@/components";

export default () => {
  return <CustomButton type="secondary">Contact Support</CustomButton>;
};
```

Happy coding...
