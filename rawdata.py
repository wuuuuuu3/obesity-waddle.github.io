import pandas as pd
# 请确保已安装pandas库：pip install pandas
# 读取Excel文件
excel_path = r'C:\\Users\\ph\\Desktop\\who\\who肥胖.xlsx'
df = pd.read_excel(excel_path, sheet_name='both')
# 只导出2022年有数据的国家
result = []
for _, row in df.iterrows():
    name = str(row['Location']).strip()
    value = row[2022]
    if pd.notnull(value):
        result.append(f"{{ name: '{name}', value: {value} }}")
print("var rawData = [\n" + ",\n".join(result) + "\n];")