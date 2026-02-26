#!/usr/bin/env python3
"""
简历模板批量转PDF脚本
将HTML文件转换为PDF格式
"""

import os
import subprocess
from pathlib import Path

# 设置工作目录
WORK_DIR = Path("/Users/mac/Desktop/resume")

def convert_html_to_pdf():
    """批量转换HTML到PDF"""
    print("🔄 开始转换简历模板...")

    # 获取所有HTML文件
    html_files = sorted(WORK_DIR.glob("*.html"))

    if not html_files:
        print("❌ 未找到HTML文件")
        return

    success_count = 0
    failed_count = 0

    for html_file in html_files:
        pdf_file = html_file.with_suffix('.pdf')

        # 跳过已存在的PDF
        if pdf_file.exists():
            print(f"⏭️  跳过已存在: {pdf_file.name}")
            continue

        print(f"📄 转换中: {html_file.name} -> {pdf_file.name}")

        try:
            # 使用wkhtmltopdf转换
            subprocess.run([
                'wkhtmltopdf',
                '--page-size', 'A4',
                '--margin-top', '0',
                '--margin-bottom', '0',
                '--margin-left', '0',
                '--margin-right', '0',
                str(html_file),
                str(pdf_file)
            ], check=True, capture_output=True)

            success_count += 1
            print(f"✅ 成功: {pdf_file.name}")

        except subprocess.CalledProcessError as e:
            failed_count += 1
            print(f"❌ 失败: {html_file.name}")
            print(f"   错误: {e.stderr.decode()}")

        except FileNotFoundError:
            print("❌ 未安装 wkhtmltopdf")
            print("💡 安装方法: brew install wkhtmltopdf")
            return

    print(f"\n📊 转换完成!")
    print(f"   成功: {success_count} 个")
    print(f"   失败: {failed_count} 个")


def check_wkhtmltopdf():
    """检查wkhtmltopdf是否安装"""
    try:
        result = subprocess.run(['wkhtmltopdf', '--version'],
                               capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ wkhtmltopdf 已安装: {result.stdout.split()[2]}")
            return True
    except FileNotFoundError:
        pass

    print("❌ wkhtmltopdf 未安装")
    print("\n💡 请先安装:")
    print("   brew install wkhtmltopdf")
    return False


def list_files():
    """列出当前目录的所有文件"""
    print("\n📁 当前文件:")
    for f in sorted(WORK_DIR.iterdir()):
        size = f"{f.stat().st_size/1024:.1f}KB"
        print(f"   {f.name} ({size})")


if __name__ == "__main__":
    list_files()

    if check_wkhtmltopdf():
        input("\n按回车键开始转换...")
        convert_html_to_pdf()
        list_files()
    else:
        print("\n💡 替代方案：直接在浏览器中打开HTML文件，然后打印为PDF")
