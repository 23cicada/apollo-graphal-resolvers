import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // GraphQL schema 路径
  schema: "./src/schema.ts",
  generates: {
    // 输出名为 types.ts 的新文件路径
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // 指定 ContextType 类型（npm run generate），
        contextType: "./context#DataSourceContext",
        // 解决 REST API 获取的数据与scheme中定义的类型不匹配
        // 该mapper被嵌入到resolver生成的类型中
        // 当resolver处理Track类型时，是这种类型（而不是schema定义的类型）
        // 当没有自定义Track mapper，resolver生成的类型将期望收到schema定义的Track类型
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel"
        }
      }
    },
  },
};

export default config;