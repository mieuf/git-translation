package org.base.mieuf.bussiness.trans;

import org.base.mieuf.bussiness.http.HttpParams;
import org.base.mieuf.bussiness.lang.LANG;
import org.base.mieuf.bussiness.http.AbstractHttpAttribute;
import org.base.mieuf.bussiness.trans.impl.TrycanTranslator;
import org.base.mieuf.bussiness.trans.impl.BaiduTranslator;
import org.base.mieuf.bussiness.trans.impl.GoogleTranslator;
import org.base.mieuf.bussiness.trans.impl.YoudaoTranslator;
import org.base.mieuf.bussiness.trans.impl.IcibaTranslator;
import org.base.mieuf.bussiness.trans.impl.OmiTranslator;
import org.base.mieuf.bussiness.trans.impl.SogouTranslator;
import org.base.mieuf.bussiness.trans.impl.TencentTranslator;

import java.io.IOException;

/**
 * AbstractTranslator is an abstract base class for all translators
 * which includes several (abstract) functions. By setting parameters,
 * the request is sent to the target server, and then parse the return
 * result to achieve the the purpose of translation.
 *
 * @see BaiduTranslator
 * @see GoogleTranslator
 * @see YoudaoTranslator
 * @see IcibaTranslator
 * @see OmiTranslator
 * @see SogouTranslator
 * @see TencentTranslator
 * @see TrycanTranslator
 */
public abstract class AbstractTranslator extends AbstractHttpAttribute implements HttpParams {

    public AbstractTranslator(String url) {
        super(url);
        setLangSupport();
    }

    @Override
    public String run(LANG source, String text) {
        return null;
    }

    @Override
    public String run(LANG from, LANG to, String text) {
        String result = "";
        setFormData(from, to, text);
        try {
            result = parses(query());
        } catch (Exception e) {
            e.printStackTrace();
        }
        close();
        return result;
    }

    /**
     * Initialize the supported language mapping.
     */
    public abstract void setLangSupport();

    @Override
    public void setFormData(LANG source, String text){}

    @Override
    public abstract void setFormData(LANG from, LANG to, String text);

    @Override
    public abstract String query() throws Exception;

    /**
     * Parse the string to extract the content of interest.
     *
     * @param text the string form of the translated result.
     * @return translation results after parsing.
     * @throws IOException if the parsing fails.
     */
    public abstract String parses(String text) throws IOException;
}