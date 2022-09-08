export interface Filter {
  name: string;
  checked: boolean;
  subFilters?: Filter[];
}
