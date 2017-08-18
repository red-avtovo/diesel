initSidebarItems({"fn":[["debug_query","Takes a query `QueryFragment` expression as an argument and returns a type that implements `fmt::Display` and `fmt::Debug` to show the query."],["delete","Creates a delete statement. Will delete the records in the given set. Because this function has a very generic name, it is not exported by default."],["insert","Creates an insert statement. Will add the given data to a table. This function is not exported by default. As with other commands, the resulting query can return the inserted rows if you choose."],["insert_default_values","Creates an insert statement with default values."],["select","Creates a bare select statement, with no from clause. Primarily used for testing diesel itself, but likely useful for third party crates as well. The given expressions must be selectable from anywhere."],["update","Creates an update statement. Helpers for updating a single row can be generated by deriving `AsChangeset`"]],"macro":[["BelongsTo","Defines a one-to-one association for the child table. This macro should be called with the name of the parent struct, followed by any options, followed by the entire struct body. The struct must be annotated with `#[table_name(name_of_table)]`. Both the parent and child structs must implement [`Identifiable`][identifiable]."],["debug_sql","Takes a query `QueryFragment` expression as an argument and returns a string of SQL with placeholders for the dynamic values."],["diesel_infix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["diesel_postfix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["diesel_prefix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["embed_migrations","This macro will read your migrations at compile time, and embed a module you can use to execute them at runtime without the migration files being present on the file system. This is useful if you would like to use Diesel's migration infrastructure, but want to ship a single executable file (such as for embedded applications). It can also be used to apply migrations to an in memory database (Diesel does this for its own test suite)."],["enable_multi_table_joins","Allow two tables which are otherwise unrelated to be used together in a multi-table join. This macro only needs to be invoked when the two tables don't have an association between them (e.g. parent to grandchild)"],["impl_AsChangeset","Implements the [`AsChangeset`][changeset] trait for a given struct. This macro should be called with the name of the table you wish to use the struct with, followed by the entire struct body. This macro mirrors `#[as_changeset]` from [`diesel_codegen`][diesel_codegen]"],["impl_Identifiable","Implements the [`Identifiable`][identifiable] trait for a reference to a given struct. This macro should be called by copy/pasting the definition of the struct into it."],["impl_Insertable","Implements the [`Insertable`][insertable] trait for a given struct. This macro should be called with the name of the table you wish to use the struct with, followed by the entire struct body."],["infer_schema","Queries the database for the names of all tables, and calls `infer_table_from_schema!` for each one. A schema name can optionally be passed to load from schemas other than the default. If a schema name is given, the inferred tables will be wrapped in a module with the same name."],["infer_table_from_schema","Establishes a database connection at compile time, loads the schema information about a table's columns, and invokes `table!` for you automatically. For tables in a schema other than the default, the table name should be given as `\"schema_name.table_name\"`."],["joinable","Allow two tables to be referenced in a join query."],["no_arg_sql_function","Declare a 0 argument SQL function for use in your code. This will generate a unit struct, which is an expression representing calling this function. See `now` for example output. `now` was generated using:"],["numeric_expr","Indicates that an expression allows all numeric operators. If you create new SQL functions that return a numeric type, you should invoke this macro that type. Unfortunately, Rust disallows us from automatically implementing `Add` for types which implement `Expression`, under its orphan rules."],["operator_allowed","Implements the Rust operator for a given type. If you create a new SQL function, which returns a type that you'd like to use an operator on, you should invoke this macro. Unfortunately, Rust disallows us from automatically implementing `Add` and other traits from `std::ops`, under its orphan rules."],["print_sql","Takes takes a query `QueryFragment` expression as an argument and prints out the SQL with placeholders for the dynamic values."],["sql_function","Declare a sql function for use in your code. Useful if you have your own SQL functions that you'd like to use. You can optionally provide a doc string as well. `$struct_name` should just be any unique name. You will not need to reference it in your code, but it is required due to the fact that `concat_idents!` is useless."],["table","Specifies that a table exists, and what columns it has. This will create a new public module, with the same name, as the name of the table. In this module, you'll find a unit struct named `table`, and a unit struct with the names of each of the columns. In the definition, you can also specify an additional set of columns which exist, but should not be selected by default (for example, for things like full text search)"]],"mod":[["associations","Traits related to relationships between multiple tables."],["backend",""],["connection",""],["data_types","Structs to represent the primitive equivalent of SQL types where there is no existing Rust primitive, or where using it would be confusing (such as date and time types). This module will re-export all backend specific data structures when compiled against that backend."],["expression","AST types representing various typed SQL expressions. Almost all types implement either `Expression` or `AsExpression`."],["expression_methods","Adds various methods to construct new expressions. These traits are exported by default, and implemented automatically."],["helper_types","Provide helper types for concisely writing the return type of functions. As with iterators, it is unfortunately difficult to return a partially constructed query without exposing the exact implementation of the function. Without higher kinded types, these various DSLs can't be combined into a single trait for boxing purposes."],["migrations","Provides functions for maintaining database schema."],["mysql",""],["pg",""],["prelude","Re-exports important traits and types. Meant to be glob imported when using Diesel."],["query_builder","Contains traits responsible for the actual construction of SQL statements"],["query_source","Types in this module are mostly internal and automatically generated. You shouldn't need to interact with these types during normal usage, other than the methods on `Table`"],["result",""],["row","Contains the `Row` trait"],["sqlite",""],["types","Types which represent a native SQL data type, and the conversions between them and Rust primitives. The structs in this module are only used as markers to represent a SQL type, and shouldn't be used in your structs. See the documentation for each type to see the Rust types that can be used with a corresponding SQL type. Additional types can be added by other crates."]]});