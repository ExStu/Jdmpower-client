import { FC } from "react";

import { Controller, useForm } from "react-hook-form";

import { CategoryResponseDto } from "@redux/rtk/CategoriesApi/types";

import Checkbox from "@Components/UI/Checkbox";
import { FormControl } from "@Components/UI/FormControl";
import { FormControlLabel } from "@Components/UI/FormControlLabel";
import Typography from "@Components/UI/Typography";

import { SCheckboxesWrap } from "@app/shop/_Components/Categories/styled";

interface ICategories {
  categories: CategoryResponseDto[];
}

const Categories: FC<ICategories> = ({ categories }) => {
  const { control } = useForm();

  const handleCheckbox = (slug: string) => {
    console.log(slug);
  };

  return (
    <SCheckboxesWrap>
      {categories.map((item) => (
        <FormControl fullWidth key={item.id}>
          <FormControlLabel
            control={
              <Controller
                name={item.slug}
                defaultValue={false}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    size="small"
                    onChange={(e) => {
                      onChange(e);
                      handleCheckbox(item.slug);
                    }}
                  />
                )}
                control={control}
              />
            }
            label={<Typography>{item.name}</Typography>}
          />
        </FormControl>
      ))}
    </SCheckboxesWrap>
  );
};

export default Categories;
