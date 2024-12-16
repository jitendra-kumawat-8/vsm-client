import {
  MenuItem,
  Select,
  FormControl,
  TextField as MuiTextField,
  Checkbox,
  OutlinedInput,
  Autocomplete,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import dayjs from "dayjs";

export type CustomInputProps = {
  type: "text" | "date" | "dropdown" | "file" | "password" | "time";
  label: string;
  name: string;
  options?: { value: string; label: string }[];
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  rows?: number;
  control: any;
  multiselect?: boolean;
  rules?: any;
  placeholder?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  name,
  options,
  startAdornment,
  endAdornment,
  rows,
  control,
  multiselect,
  rules,
  placeholder,
}) => {
  const getValueForDropdown = (
    value?: string | string[] | null,
    multiselect?: boolean
  ) => {
    if (multiselect) {
      if (Array.isArray(value)) {
        return value;
      } else if (typeof value === "string") {
        return value.split(", ").map((item) => item.trim());
      } else {
        return [];
      }
    } else {
      return value ?? "";
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const { value, onChange } = field;

        switch (type) {
          case "time":
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex flex-col gap-2 w-full self-end">
                  <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
                    {label}
                  </p>
                  <TimePicker
                    {...field}
                    value={value ? dayjs(value) : null}
                    onChange={(time) =>
                      onChange(time ? time.toISOString() : "")
                    }
                    slots={{
                      openPickerIcon: (props) => (
                        <div
                          className=" -mr-3 h-[46px] w-[50px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center"
                          onClick={props?.onClick}
                        >
                          <CalendarTodayRoundedIcon />
                        </div>
                      ),
                    }}
                    slotProps={{
                      textField: {
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                        sx: {
                          borderRadius: "11px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            color: "#45133C",
                            background: "#F1F3F6",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: 1,
                            color: "#45133C",
                            padding: 1.6,
                            background: "#F1F3F6",
                          },
                          "& .MuiOutlinedInput-input": {
                            cursor: "text",
                            caretColor: "#A88652",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>
            );

          case "text":
          case "password":
            return (
              <div className="flex flex-col gap-2 w-full self-end">
                <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
                  {label}
                </p>
                <MuiTextField
                  {...field}
                  type={type}
                  value={value ?? ""}
                  rows={rows}
                  multiline={!!rows}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: endAdornment ? endAdornment : null,
                      startAdornment: startAdornment ? startAdornment : null,
                    },
                  }}
                  placeholder={placeholder}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  sx={{
                    borderRadius: "11px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      fontSize: "0.9rem",
                      fontFamily: "Poppins, sans-serif",
                      color: "#45133C",
                    },
                    "& .MuiInputBase-root": {
                      padding: 0,
                    },

                    "& .MuiInputBase-input": {
                      fontSize: "0.9rem",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: 1,
                      color: "#45133C",
                      padding: 2,
                      background: "#F1F3F6",
                      borderRadius: "11px",
                    },
                    "& .MuiOutlinedInput-input": {
                      cursor: "text",
                      caretColor: "#A88652",
                      padding: 1.6,
                    },
                  }}
                />
              </div>
            );

          case "date":
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex flex-col gap-2 self-end">
                  <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
                    {label}
                  </p>
                  <DatePicker
                    {...field}
                    value={value ? dayjs(value) : null}
                    onChange={(date) =>
                      onChange(date ? date.toISOString() : "")
                    }
                    slots={{
                      openPickerIcon: (props) => (
                        <div
                          className=" -mr-3 h-[46px] w-[50px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center"
                          onClick={props?.onClick}
                        >
                          <CalendarTodayRoundedIcon />
                        </div>
                      ),
                    }}
                    format="DD-MM-YYYY"
                    slotProps={{
                      textField: {
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                        sx: {
                          borderRadius: "11px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            color: "#45133C",
                            background: "#F1F3F6",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: 1,
                            color: "#45133C",
                            padding: 1.6,
                            background: "#F1F3F6",
                          },
                          "& .MuiOutlinedInput-input": {
                            cursor: "text",
                            caretColor: "#A88652",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </LocalizationProvider>
            );

          case "dropdown":
            return (
              <div className="flex flex-col gap-2 self-end">
                <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
                  {label}
                </p>
                <FormControl fullWidth>
                  <Autocomplete
                    {...field}
                    disablePortal
                    value={
                      multiselect
                        ? options?.filter((option) =>
                            (Array.isArray(value) ? value : [value]).includes(
                              option.value
                            )
                          )
                        : options?.find((option) => option.value === value) ||
                          null
                    }
                    onChange={(_, newValue) => {
                      const result = multiselect
                        ? (newValue as { value: string; label: string }[])?.map(
                            (item) => item.value
                          )
                        : (newValue as { value: string; label: string })
                            ?.value || "";
                      onChange(result);
                    }}
                    ListboxProps={{
                      sx: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        color: "#45133C",
                        "& .MuiAutocomplete-option": {
                          "&:hover, &.Mui-focused, &.Mui-selected": {
                            backgroundColor: "#A88652", // Use your desired hover and focus background color
                            color: "white", // Adjust text color if necessary
                          },
                        },
                      },
                    }}
                    multiple={multiselect}
                    options={options ?? []}
                    getOptionLabel={(option: any) =>
                      option?.label || option?.value || ""
                    }
                    sx={{
                      "& .MuiAutocomplete-inputRoot": {
                        padding: "5px",
                      },
                      "& .MuiAutocomplete-popupIndicator": {
                        color: "#45133C", // Example to style the dropdown indicator
                      },
                      "& .MuiPopper-root": {
                        background: "#F1F3F6",
                      },
                    }}
                    renderInput={(params) => (
                      <MuiTextField
                        {...params}
                        // label={label}
                        sx={{
                          borderRadius: "11px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            color: "#45133C",
                            background: "#F1F3F6",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "0.9rem",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: 1,
                            color: "#45133C",
                            padding: 1.6,
                            background: "#F1F3F6",
                          },
                          "& .MuiOutlinedInput-input": {
                            cursor: "text",
                            caretColor: "#A88652",
                          },
                        }}
                      />
                    )}
                  />
                  {fieldState.error && (
                    <p color="error">{fieldState.error.message}</p>
                  )}
                </FormControl>
              </div>
            );

          default:
            return <></>;
        }
      }}
    />
  );
};

export default CustomInput;
