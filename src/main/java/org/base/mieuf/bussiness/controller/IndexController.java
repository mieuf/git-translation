package org.base.mieuf.bussiness.controller;

import org.base.mieuf.bussiness.lang.LANG;
import org.base.mieuf.bussiness.querier.Querier;
import org.base.mieuf.bussiness.trans.AbstractTranslator;
import org.base.mieuf.bussiness.trans.impl.GoogleTranslator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Date 2018/11/12  23:13
 * @Description TODO
 **/
@Controller
@RequestMapping("/index")
public class IndexController {

    @RequestMapping(value = "/hello",method = RequestMethod.POST)
    @ResponseBody
    public String hello(String text) {
        Querier<AbstractTranslator> querierTrans = new Querier<>();                   // 获取查询器

//        querierTrans.setParams(LANG.ZH, LANG.EN, "如果这都不算爱，我有什么好悲哀！");    // 设置参数
        querierTrans.setParams(LANG.ZH, LANG.EN, text);    // 设置参数

        querierTrans.attach(new GoogleTranslator());                                  // 向查询器中添加 Google 翻译器

        List<String> result = querierTrans.execute();                                 // 执行查询并接收查询结果

        for (String str : result) {
            System.out.println(str);
        }
        result.stream().forEach(str -> System.out.println(str));
        StringBuffer sb = new StringBuffer();
        result.stream().forEach(s -> sb.append(s));
        return sb.toString();
    }

    //@RestController
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login() {
        return new ModelAndView("file");
    }

    //@Controller
    @RequestMapping(value = "/logins", method = RequestMethod.GET)
    public String logins() {
        return  "test";
    }
}