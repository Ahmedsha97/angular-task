 export interface EmployeeData {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        EmployeeUserData[];
    support:     Support;
  }
  
  export interface EmployeeUserData {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;

  }
  
  export interface Support {
    url:  string;
    text: string;
  }
  