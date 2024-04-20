interface Driver {
  // all is public in interfaces
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('connecting to port 5432...');
  }
  disconnect(): void {
    console.log('disconnecting to port 5432...');
  }
  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('connecting to port 1521...');
  }
  disconnect(): void {
    console.log('disconnecting to port 1521...');
  }
  isConnected(name: string): boolean {
    return true;
  }
}
