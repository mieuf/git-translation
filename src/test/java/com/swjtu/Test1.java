package com.swjtu;

import com.github.houbb.word.checker.core.impl.EnWordChecker;
import org.base.mieuf.bussiness.lang.LANG;
import org.base.mieuf.bussiness.querier.Querier;
import org.base.mieuf.bussiness.trans.AbstractTranslator;
import org.base.mieuf.bussiness.trans.impl.GoogleTranslator;

import java.util.List;

public class Test1 {
    public static void main(String[] args) {
        Querier<AbstractTranslator> querierTrans = new Querier<>();                   // 获取查询器

        querierTrans.setParams(LANG.ZH, LANG.EN, "如果这都不算爱，我有什么好悲哀！");    // 设置参数

        querierTrans.attach(new GoogleTranslator());                                  // 向查询器中添加 Google 翻译器

        List<String> result = querierTrans.execute();                                 // 执行查询并接收查询结果

        for (String str : result) {
            System.out.println(str);
        }


        final String results = EnWordChecker.getInstance().correct("speling");
        boolean speling = EnWordChecker.getInstance().isCorrect("speling");
        System.out.println(speling);


        System.out.println(results);
    }
}